import { NavLink } from 'react-router'
import './App.css'

function App() {
  return (
    <>
      <h1>Lista de compras</h1>
      <nav>
        <NavLink to="/login" end>
          Login 123
        </NavLink>
      </nav>
    </>
  )
}

export default App
