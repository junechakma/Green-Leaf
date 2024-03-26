import { Outlet } from 'react-router-dom'
import NavBar from '../Component/Shared/NavBar'

function Main() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    </>
  )
}

export default Main