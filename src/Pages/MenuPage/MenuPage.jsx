import HeroPage from "../../Component/Shared/HeroPage"

function MenuPage() {
  return (
    <div>
      <HeroPage />

      {/* Menu */}
      <div className="py-16 bg-[#F3FFF0] relative">
        <div className="container ">
          <h1 className="text-2xl md:text-4xl text-center font-mont font-semibold"> Our Delicious Menu</h1>
          <p className=" text-center mt-4">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
        </div>
      </div>
      {/* End Of MEnu */}


      {/* Student Exclusive */}
      <div className="container my-16 relative h-[60vh] rounded-md flex items-center justify-end" style={{ backgroundImage: "url('/assets/background/student.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="w-1/3 h-[80%] p-6 border border-black m-10 z-10 rounded-md flex flex-col justify-between items-center">
          <h1 className="text-2xl md:text-4xl  font-mont font-semibold text-white"> Student Exclusive Deal!</h1>
          <p className=" mt-4 text-white">Flash your student ID and enjoy the perfect sip for chilly days. Whether you're into bold coffees, calming teas, or indulgent hot chocolates, we've got your taste buds covered.</p>
          <button className="button">Contact Now</button>
        </div>
        <div className="w-2/3 h-full bg-gradient-to-r from-transparent to-green absolute"> </div>
      </div>
      {/* End Of Student */}


      {/* Try Our Special Items */}

      <div className="container py-16 flex gap-6 ">
        <div>
          <img src="/assets/menu/rice.png" />
          <div className="w-2/3 pl-6">
            <div className="my-4 flex flex-col gap-2">
              <p className="">waiting for you</p>
              <h1 className="text-2xl md:text-4xl  font-mont font-semibold">Try Our Special Items</h1>
              <p>Mi neque sed cras nulla neque vestibulum vitae neque quam.
                Mi nulla tellus, sit leo commodo. Eu aenean diam at malesuada.
                Id pretium tempor id porta feugiat semper risus.</p>
            </div>

            <button className="button ">Contact Now</button>

          </div>
        </div>
        <img src="/assets/menu/coffee.png" className="w-1/3" />
      </div>
    </div>
  )
}

export default MenuPage