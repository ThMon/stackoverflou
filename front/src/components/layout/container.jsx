import Header from './header';


export default function Container({children}) {
  return (
    <div>
        <Header />
        <main>
            {children}
        </main>
    </div>
  )
}
