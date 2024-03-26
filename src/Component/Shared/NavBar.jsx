import { Link, useNavigation } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
function NavBar() {
  const navigation = useNavigation();

  console.log("Path:", navigation.location)

  return (
    <>
      <div className=" bg-primary">
        <div className="w-[92vw] md:w-[90vw] mx-auto py-4 flex justify-between items-center">
          <div className="flex items-center gap-10">

            {/* Logo */}
            <div className="flex items-center">
              <img src="/assets/logo/logo.png" className="w-20 h-20" />
              <p className="font-semibold text-lg uppercase font-mont text-dark">
                Green Leaf <br /> Cafe
              </p>
            </div>

            {/* Nav-Menu */}
            <div className="flex space-x-10">
              <Link to="/" className={`font-mont font-medium text-xl text-dark ${navigation.location === "/" ? "text-light" : "text-dark"}`} >Home </Link>
              <Link to="/menu" className={`font-mont  text-xl text-dark ${navigation.location === "/menu" ? "text-light" : "text-dark"}`} >Menu </Link>
              <Link to="/gallery" className={`font-mont  text-xl text-dark`} >Gallery </Link>
              <Link to="/about" className={`font-mont   text-xl text-dark`} >About </Link>
              <Link to="/location" className={`font-mont  text-xl text-dark`} >Location </Link>
              <Link to="/contact" className={`font-mont  text-xl text-dark`} >Contact Us </Link>
            </div>
          </div>

          <div className="flex space-x-2">
            <div className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaXTwitter size={18} />
            </div>
            <div className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaInstagram size={18} />
            </div>
            <div className="bg-white p-3 rounded-full text-secondary hover: hover:text-dark">
              <FaFacebookF size={18} />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NavBar