import { Outlet } from "react-router-dom"
import { NavItems } from "./Components/Navbar/NavItems"

function App() {

  return (
    <>
      <NavItems />
      <Outlet />

    </>
  )
}

export default App
