import { NavLink } from "react-router";
import './App.css'

function App() {

  return (
    <>
    <h1>Lista de compras</h1>
    <nav>
      <NavLink to="/login" end>
       Login 
      </NavLink>
    </nav>
    </>
  )
}

export default App
