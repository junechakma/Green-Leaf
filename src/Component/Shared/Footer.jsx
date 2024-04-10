import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className="w-full bg-[#5AB256] py-16">
        <div className="container flex flex-col md:flex-row flex-wrap justify-between items-start md:space-x-6 space-y-6">

          <div className="flex flex-col">
            <img src='/assets/logo/logo.png' className="w-20 " />
            <p className="hidden md:block">Welcome to the cafe where we serve the best  and the best <br /> only chaii and coffee,  boiled and brewed to your liking!</p>
            <p className="block md:hidden">Welcome to the cafe where we serve the best  and the best only chaii and coffee,  boiled and brewed to your liking!</p>

          </div>

          <div className="flex flex-col">
            <p className="md:text-white font-semibold pb-3"> Products</p>
            <div className="grid grid-cols-2 gap-x-6 md:flex md:flex-col">
              <Link className="text-white hover:text-secondary">Cofee</Link>
              <Link className="text-white hover:text-secondary">Tea</Link>
              <Link className="text-white hover:text-secondary">Spacial Tea</Link>
              <Link className="text-white hover:text-secondary">Sweet Paan</Link>
              <Link className="text-white hover:text-secondary">Espresso</Link>
              <Link className="text-white hover:text-secondary">Cappuccino</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="md:text-white font-semibold pb-3">Teams</p>
            <div className="grid grid-cols-2 gap-x-6 md:flex md:flex-col">
              <Link className="text-white hover:text-secondary">Branch-1</Link>
              <Link className="text-white hover:text-secondary">Branch-2</Link>
              <Link className="text-white hover:text-secondary">Service</Link>
              <Link className="text-white hover:text-secondary">Reservation </Link>
              <Link className="text-white hover:text-secondary">Phone</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="md:text-white font-semibold pb-3">About</p>
            <div className="grid grid-cols-2 gap-x-6 md:flex md:flex-col">
              <Link className="text-white hover:text-secondary">Our Service</Link>
              <Link className="text-white hover:text-secondary">Photos</Link>
              <Link className="text-white hover:text-secondary">New Item</Link>
              <Link className="text-white hover:text-secondary">Store </Link>
              <Link className="text-white hover:text-secondary">Career</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <p className="md:text-white font-semibold pb-3">Subscribe Us</p>

            <input className="bg-primary rounded-md p-2 focus:outline-none placeholder:text-white text-black bg-opacity-30" placeholder="Your email here..."></input>

            <div className="pt-3">
              <button className="bg-green px-6 py-3 rounded-md text-white  hover:bg-secondary">Subscribe</button>
            </div>
          </div>

        </div>

      </div>
      <div className="flex items-center justify-center gap-4 bg-green py-2 text-white">
        <div>
          <p>Copyright © 2023 , {" "}<Link to="https://cafegreenleaf.co.uk/">cafegreenleaf.co.uk ;</Link> </p>
        </div>
        <div>
          <p>Powered By <Link to="https://compileq.co.uk" className="underline hover:text-secondary">CompileQ</Link> </p>
        </div>
      </div>
    </>
  )
}

export default Footer