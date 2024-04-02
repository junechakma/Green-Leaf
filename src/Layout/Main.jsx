import { Outlet } from 'react-router-dom'
import NavBar from '../Component/Shared/NavBar'
import Footer from '../Component/Shared/Footer'

function Main() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Main