import Hero from "../../Component/HomePage/Hero"
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const productData = [
  {
    name: "Karak/Masala Chaii",
    image: "/assets/homepage/product1.png",
    price: "£1.50",
    rating: 4.5
  },
  {
    name: "Cappuccino",
    image: "/assets/homepage/product2.png",
    price: "£1.50",
    rating: 4.5
  },
  {
    name: "Espresso",
    image: "/assets/homepage/product3.png",
    price: "£1.50",
    rating: 4.2
  },
  {
    name: "Earl Grey Supreme",
    image: "/assets/homepage/product4.png",
    price: "£1.50",
    rating: 4.8
  },
  {
    name: "Arabic Coffee",
    image: "/assets/homepage/product5.png",
    price: "£1.50",
    rating: 4.6
  },
  {
    name: "Sweet Yogurt (Doi)",
    image: "/assets/homepage/product6.png",
    price: "£3.00",
    rating: 4.4
  },
  {
    name: "Gurer (Molasses) Chaii",
    image: "/assets/homepage/product7.png",
    price: "£1.50",
    rating: 4.7
  },
  {
    name: "Ginger/Lemon/Honey/Mint Chaii",
    image: "/assets/homepage/product8.png",
    price: "£1.50",
    rating: 4.3
  }
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* We Offer Top */}
      <div className="py-16 bg-primary relative">
        <div className="container ">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl md:text-4xl font-mont font-semibold"> We Offer karak quality </h1>
              {/* <img src="/assets/homepage/cup-icon.png" className="rounded-md" alt="Explore Cofee" /> */}
            </div>
          </div>

          <div className="hidden md:flex justify-evenly flex-wrap md:flex-nowrap space-x-4 gap-y-6 md:space-x-10 pt-16">
          
            <div className="flex gap-2 md:space-x-4">
              <div className="flex flex-col items-center md:gap-4">
                <div style={{ backgroundImage: "url('/assets/background/design1.png')", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <img src="/assets/homepage/menu4.jpg" className="py-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Hot Drinks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>

              <div className="flex flex-col items-center md:gap-4 md:pt-20">
                <div style={{ backgroundImage: "url('/assets/background/design1.png')", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <img src="/assets/homepage/menu2.jpg" className="py-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Cold Drinks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>
            </div>

            <div className="flex gap-2 md:space-x-4">
              <div className="flex flex-col items-center md:gap-4">
                <div style={{ backgroundImage: "url('/assets/background/design1.png')", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <img src="/assets/homepage/menu3.jpg" className="py-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Dessert</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>

              <div className="flex flex-col items-center md:gap-4 md:pt-20">
                <div style={{ backgroundImage: "url('/assets/background/design1.png')", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
                  <img src="/assets/homepage/menu1.jpg" className="py-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Snacks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>
            </div>
          </div>

          {/* Mobile View */}

          <div className="flex md:hidden justify-between flex-wrap md:flex-nowrap  ">
           
            <div className="flex gap-4 md:space-x-4">
              <div className="flex flex-col items-center md:gap-4">
                <div >
                  <img src="/assets/homepage/menu4.jpg" className="pt-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Hot Drinks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>

              <div className="flex flex-col items-center ">
                <div >
                  <img src="/assets/homepage/menu2.jpg" className="pt-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Cold Drinks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>
            </div>

            <div className="flex gap-4 md:space-x-4">
              <div className="flex flex-col items-center ">
                <div >
                  <img src="/assets/homepage/menu3.jpg" className="pt-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Dessert</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>

              <div className="flex flex-col items-center ">
                <div >
                  <img src="/assets/homepage/menu1.jpg" className="pt-10" />
                </div>
                <p className="text-xl md:text-3xl font-semibold text-secondary">Snacks</p>
                <Link to="menu" className="text-secondary">View Menu</Link>
              </div>
            </div>
          </div>

        </div>
        <img src="/assets/background/cup.png" className="absolute -top-10 right-0 w-28 md:w-44" />
        <img src="/assets/background/olive.png" className="absolute -bottom-24 right-0 w-56" />
      </div>
      {/* End We Offer Top */}


      {/* Explore All Coffee World */}
      <div className="my-24 relative">
        <div className="container bg-primary p-6 md:p-10 md:px-24 rounded-md">

          <div className="py-6 grid grid-cols-2  gap-6">
            <h1 className="text-2xl md:text-3xl font-bold">Explore The Excellence, <br></br> with us!</h1>
            <p className="text-left text-sm md:text-base">Welcome to the cafe where we serve the best and the best only chaii and coffee, boiled and brewed to your liking!</p>
          </div>

          <div className="py-2">
            <img src="/assets/homepage/image4.png" className="rounded-md h-[18vh] md:h-auto object-cover " alt="Explore Cofee" />
          </div>

          <div className="flex py-6 justify-between md:px-16">

            <div className="flex flex-col items-center text-secondary gap-2">
              <img src="/assets/icons/icon1.png" className="w-8 md:w-16" />
              <p className="text-sm md:text-base text-center">Authentic chaii</p>
            </div>

            <div className="flex flex-col items-center text-secondary gap-2">
              <img src="/assets/icons/icon2.png" className="w-8 md:w-16" />
              <p className="text-sm md:text-base text-center">Served right</p>
            </div>

            <div className="flex flex-col items-center text-secondary gap-2">
              <img src="/assets/icons/icon3.png" className="w-8 md:w-16" />
              <p className="text-sm md:text-base text-center">Frank Ambiance</p>
            </div>

            <div className="flex flex-col items-center text-secondary gap-2">
              <img src="/assets/icons/icon4.png" className="w-8 md:w-16" />
              <p className="text-sm md:text-base text-center">Special items</p>
            </div>
          </div>
        </div>
        <img src="/assets/background/onion.png" className="absolute top-36 left-4 w-12 md:w-20" />
        <img src="/assets/background/olive.png" className="absolute -bottom-24 right-0 w-32 md:w-56 rotate-180" />
      </div>
      {/* End Of Cofee World */}



      {/* Betel Leaf */}
      <div className="w-full md:h-[60vh] flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src="/assets/homepage/image5.png" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center gap-6 bg-primary relative pb-10 md:pb-0"  >
          <div className="flex items-center gap-4 z-10">
            <img src="/assets/background/betel-leaf.png" className="w-20 md:w-36" />
            <p className="hidden md:block font-mont text-2xl md:text-3xl mt-10"> Experience sweet/masala pan
              <br /> (Betel Leaf)</p>
            <p className="block md:hidden font-mont text-2xl md:text-3xl mt-10"> Experience sweet/masala pan
              (Betel Leaf)</p>
          </div>
          <div className="px-10 md:px-16 z-10 ">
            <p>The Banarasi betel leaf, grown in the Varanasi region of India, holds a special place in South Asian culture
              being prized for its large size, heart shape, and vibrant green color.</p>
          </div>
          <img src="/assets/background/oval1.png" className="w-20 md:w-36 absolute right-0 bottom-0 " />
          <img src="/assets/background/oval2.png" className="w-20 md:w-36 absolute right-0 bottom-0" />
        </div>
      </div>
      {/* Betel Leaf */}


      {/* Quality Products  */}
      <div className="py-24">
        <div className=" w-[90vw] md:w-[80vw] mx-auto bg-[#F6EBDA] p-6 md:p-10 md:px-24 rounded-md flex flex-row relative overflow-x-clip" style={{ backgroundImage: "url('/assets/background/cups.png')", backgroundSize: 'contain', }}>
          <div className="md:py-10 flex flex-col  gap-2 md:gap-6  w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold">Enjoy top notch customer  <br></br> service</h1>
            <p className="text-left hidden md:block">Here in Green Leaf, we treat each and every customer as our friends and families. Your comfort and
              convenience is the primary commitment and concern for us. Come to our café with your loved ones to
              enjoy our delightful brews and cuisines, pronto!</p>
            <p className="text-left pr-2 block md:hidden">In GreenLeaf, we treat each and every customer as our friends and family!.</p>
          </div>
          <img src="/assets/homepage/profile.png" className="w-[250px] md:w-[350px] absolute -right-16 md:right-20 bottom-0" alt="Explore Cofee" />
        </div>
      </div>
      {/* End of Quality Products */}


      {/* Popular Products */}
      <div className="py-16 bg-[#F3FFF0] relative">
        <div className="container ">
          <h1 className="text-2xl md:text-4xl text-center font-mont font-semibold"> Our Popular Product </h1>
          <p className=" text-center mt-4">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
          <div className="pt-6 md:py-8 grid grid-cols-2 items-center md:flex md:justify-between md:flex-wrap gap-4 md:gap-6 ">
            {
              productData.map((item, index) => {
                return (
                  <Link to="/menu"  key={index} className="w-full flex flex-col bg-white rounded-xl justify-center items-center md:w-[18vw]">
                    <img src={item.image} className="w-full rounded-t-md " />
                    <div className="flex flex-col items-center justify-center pt-4 pb-6">
                      <p className="font-inter font-semibold text-sm md:text-base text-center">{item.name}</p>
                      <p className="font-inter font-semibold text-secondary">{item.price}</p>
                    </div>
                  </Link >
                )
              })
            }
          </div>

          {/* View Button */}
          <div className="flex items-center justify-center py-4">
            <Link to="/menu"  className="bg-green px-6 py-3 rounded-md text-white hover:bg-secondary">View All Menu</Link>
          </div>
        </div>

        <img src="/assets/background/tea-bag.png" className="absolute -top-10 md:-top-16 left-0 w-24 md:w-36" />
        <img src="/assets/background/seed.png" className="absolute top-10 md:top-16 right-0 w-16 md:w-20" />
        <img src="/assets/background/tea-bag.png" className="absolute -bottom-10 md:-top-16 right-0 w-24 md:w-36 rotate-12 md:hidden" />
      </div>

      {/*End Of  Popular Products */}


      {/* Call to action */}
      <div className="container my-24 bg-primary px-8 md:px-20 py-10 rounded-md flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <div>
          <h1 className="text-xl md:text-3xl font-mont font-semibold pb-4">Best leaves and beans, imported and brewed!</h1>
          <p>We provide the best and only the best when it comes to quality and quantity of choices to select from!</p>

          <div className="flex gap-4 py-4 ">
            <IoIosCheckmarkCircle size={28} className="text-green" />
            <div>
              <p className="font-semibold">On-time service:</p>
              <p>All you have to do is just come, tell us what you feel for and get it delivered in a flash while you relax!</p>
            </div>
          </div>

          <div className="flex gap-4  ">
            <IoIosCheckmarkCircle size={28} className="text-green" />
            <div>
              <p className="font-semibold">Wide-varities: </p>
              <p>here's choices for every tastebuds out there! We got wide range of beverages and snacks to meet your expectations.</p>
            </div>
          </div>

          {/* Reservation Button */}
          <div className="pt-10">
            <Link to="/contact" className="bg-green px-6 py-3 rounded-md text-white  hover:bg-secondary">Order Store Pick-up</Link >
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <img src="/assets/homepage/roasted-coffee.png" className="w-full" />

          <div className="bg-white p-2 md:p-6 rounded-md gap-4 inline-flex absolute bottom-10 md:bottom-24">
            <div className="bg-primary  rounded-md flex items-center justify-center w-8 h-8 md:w-16 md:h-16">
              <MdOutlineStarPurple500 size={36} className="text-green" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-semibold ">Good Taste</h1>
              <p className="text-sm hidden md:block">You can feel taste best coffee <br /> as you want</p>
            </div>
          </div>
        </div>

      </div>

      {/*End Call to action  */}
    </>
  )
}

export default HomePage