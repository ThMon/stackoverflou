import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Container from './components/layout/container';
import Home from './components/home';
import Register from './components/user/register';
import Login from './components/user/login';
import RequireAuth from './helper/RequireAuth';
import Topics from './components/topic/topics';
import AddTopic from './components/topic/addTopic';
import Topic from './components/topic/topic';
import AddMessage from './components/message/addMessage';
import Profil from './components/profil/profil';
import Admin from './components/admin/admin';
import UpdateMessage from './components/message/updateMessage';

function App() {
  return (
    <div className="App">
      <Container>
        <Routes>
          <Route path="/" element={
              <RequireAuth withAuth={true}>
                <Home/>
              </RequireAuth>
            }/>

          <Route path="/register" element={
            <RequireAuth withAuth={false}>
              <Register/> 
            </RequireAuth>
          }/>

          <Route path="/login" element={
            <RequireAuth withAuth={false}>
              <Login/>
            </RequireAuth>}/>

          <Route path="/topics" element={
              <RequireAuth withAuth={true}>
                <Topics/>
              </RequireAuth>
            }/>
          <Route path="/addTopic" element={
              <RequireAuth withAuth={true}>
                <AddTopic/>
              </RequireAuth>
            }/>
            <Route path="/topic/:id" element={
              <RequireAuth withAuth={true}>
                <Topic/>
              </RequireAuth>
            }/>
            <Route path="/addMessage/:topic_id" element={
              <RequireAuth withAuth={true}>
                <AddMessage/>
              </RequireAuth>
            }/>
            <Route path="admin/updateMessage/:message_id" element={
              <RequireAuth withAuth={true}>
                <UpdateMessage/>
              </RequireAuth>
            }/>
            <Route path="/profil" element={
              <RequireAuth withAuth={true}>
                <Profil/>
              </RequireAuth>
            }/>
            <Route path="/admin" element={
              <RequireAuth withAuth={true}>
                <Admin/>
              </RequireAuth>
            }/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
