import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Container from './components/layout/container';
import Home from './components/home';
import Register from './components/user/register';
import Login from './components/user/login';
import RequireAuth from './helper/RequireAuth';

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
        </Routes>
        <Routes>
          <Route path="/register" element={
            <RequireAuth withAuth={false}>
              <Register/> 
            </RequireAuth>
          }/>
        </Routes>
        <Routes>
          <Route path="/login" element={
            <RequireAuth withAuth={false}>
              <Login/>
            </RequireAuth>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
