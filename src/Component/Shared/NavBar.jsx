import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { useEffect, useState } from "react";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function NavBar() {
  const location = useLocation();

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    setToggle(false)
  }, [])



  return (
    <>
      <div className="w-full hidden md:block bg-primary fixed z-20 left-1/2 -translate-x-1/2 shadow-md">
        <div className="w-[92vw] md:w-[90vw] mx-auto py-2 flex justify-between items-center">

          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/assets/logo/logo.png" className="w-20 h-20" />
              <p className="font-semibold text-lg uppercase font-mont text-dark">
                Green Leaf <br /> Cafe
              </p>
            </Link>
          </div>

          {/* Nav-Menu */}
          <div className="flex space-x-12">
            <div className="flex items-center  gap-2">
              {
                location.pathname === "/" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/" className={`font-mont font-medium text-xl text-dark ${location.pathname === "/" ? "text-light" : "text-dark"}`} >Home </Link>
            </div>

            <div className="flex items-center gap-2">
              {
                location.pathname === "/menu" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/menu" className={`font-mont  text-xl text-dark ${location.pathname === "/menu" ? "text-light" : "text-dark"}`} >Menu </Link>
            </div>

            <div className="flex items-center gap-2">
              {
                location.pathname === "/gallery" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/gallery" className={`font-mont  text-xl text-dark ${location.pathname === "/gallery" ? "text-light" : "text-dark"}`} >Gallery </Link>
            </div>

            <div className="flex items-center gap-2">
              {
                location.pathname === "/about" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/about" className={`font-mont  text-xl text-dark ${location.pathname === "/about" ? "text-light" : "text-dark"}`} >About </Link>
            </div>

            <div className="flex items-center gap-2">
              {
                location.pathname === "/location" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/location" className={`font-mont  text-xl text-dark ${location.pathname === "/location" ? "text-light" : "text-dark"}`} >Location </Link>
            </div>

            <div className="flex items-center gap-2">
              {
                location.pathname === "/contact" && (
                  <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                )
              }
              <Link to="/contact" className={`font-mont  text-xl text-dark ${location.pathname === "/contact" ? "text-light" : "text-dark"}`} >Contact </Link>
            </div>
          </div>

          <div className="flex space-x-2">
            <Link to={"https://g.page/r/CU-0DqYaPKvdEBE/review"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaGoogle size={18} />
            </Link>
            <Link to={"https://www.instagram.com/greenleaf.uk?igsh=MTY4MTc0ZWxvOHR1ZQ%3D%3D&utm_source=qr"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaInstagram size={18} />
            </Link>
            <Link to={"https://www.facebook.com/profile.php?id=100054622906779"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaFacebookF size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      {/* Logo */}
      {/* <div className="w-full md:hidden bg-primary fixed z-20 left-1/2 -translate-x-1/2 shadow-md">
        <div className="w-[92vw] md:w-[90vw] mx-auto py-2 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="flex items-center">
              <img src="/assets/logo/logo.png" className="w-20 h-20" />
              <p className="font-semibold text-lg uppercase font-mont text-dark">
                Green Leaf <br /> Cafe
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
              <Link to="/" className="font-mont font-medium text-xl text-dark">Home </Link>
            </div>
          </div>
        </div>
      </div> */}


      {/* Mobile Version */}

      {
        toggle ? (

          <div className=" md:hidden absolute z-20 bg-primary w-full flex flex-col items-center gap-10 py-16">

            <div className="flex items-center justify-center absolute bg-primary border w-16 h-16 z-10 rounded-full right-4 top-4 shadow-md" onClick={handleToggle}>
              <MdOutlineClose size={32} />
            </div>

            {/* Mobile Nav */}
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2">
                {
                  location.pathname === "/" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/" className={`font-mont font-medium text-xl text-dark ${location.pathname === "/" ? "text-light" : "text-dark"}`} onClick={handleToggle}>Home </Link>
              </div>

              <div className="flex items-center gap-2">
                {
                  location.pathname === "/menu" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/menu" className={`font-mont  text-xl text-dark ${location.pathname === "/menu" ? "text-light" : "text-dark"}`} onClick={handleToggle} >Menu </Link>
              </div>

              <div className="flex items-center gap-2">
                {
                  location.pathname === "/gallery" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/gallery" className={`font-mont  text-xl text-dark ${location.pathname === "/gallery" ? "text-light" : "text-dark"}`} onClick={handleToggle}>Gallery </Link>
              </div>

              <div className="flex items-center gap-2">
                {
                  location.pathname === "/about" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/about" className={`font-mont  text-xl text-dark ${location.pathname === "/about" ? "text-light" : "text-dark"}`} onClick={handleToggle}>About </Link>
              </div>

              <div className="flex items-center gap-2">
                {
                  location.pathname === "/location" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/location" className={`font-mont  text-xl text-dark ${location.pathname === "/location" ? "text-light" : "text-dark"}`} onClick={handleToggle}>Location </Link>
              </div>

              <div className="flex items-center gap-2">
                {
                  location.pathname === "/contact" && (
                    <img src="/assets/homepage/cup-icon.svg" className="rounded-md w-8 " alt="Explore Cofee" />
                  )
                }
                <Link to="/contact" className={`font-mont  text-xl text-dark ${location.pathname === "/contact" ? "text-light" : "text-dark"}`} onClick={handleToggle} >Contact </Link>
              </div>
            </div>

            {/* Social */}
            <div className="flex space-x-2">
              <Link to={"https://g.page/r/CU-0DqYaPKvdEBE/review"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
                <FaGoogle size={18} />
              </Link>
              <Link to={"https://www.instagram.com/greenleaf.uk?igsh=MTY4MTc0ZWxvOHR1ZQ%3D%3D&utm_source=qr"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
                <FaInstagram size={18} />
              </Link>
              <Link to={"https://www.facebook.com/profile.php?id=100054622906779"} target="_blank" className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
                <FaFacebookF size={18} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center absolute bg-primary w-16 h-16 z-10 rounded-full right-4 top-4 shadow-md" onClick={handleToggle}>
            <HiMenuAlt3 size={32} />
          </div>
        )
      }

    </>
  )
}

export default NavBar