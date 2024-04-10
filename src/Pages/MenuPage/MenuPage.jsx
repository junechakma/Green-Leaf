import { Link } from "react-router-dom"
import HeroPage from "../../Component/HeroPage"
import Tabs from "../../Component/MenuPage/Tabs"
import Reservation from "../../Component/Reservation"

const heroData = {
  title: "Our Offerings",
  subtitle: "We provide the best, and only the best! ",
  image: "/assets/menu/menu.jpg",
  image2: "/assets/menu/hero.jpg"
}

function MenuPage() {
  return (
    <div className="bg-snowDrift ">
      <HeroPage title={heroData.title} description={heroData.subtitle} img={heroData.image} img2={heroData.image2} />


      {/* Menu */}
      <div className="container py-16 relative">
        <div className="container ">
          <h1 className="text-2xl md:text-4xl text-center font-semibold"> Our Dynamic Menu</h1>
          <p className=" text-center mt-4">Choose your next big craving!</p>
        </div>

        <Tabs />
        <img src="/assets/background/tea-bag.png" className="absolute top-0 md:top-10 -left-16 w-24 md:w-36" />
        <img src="/assets/background/olive.png" className="absolute top-1/2 right-0 md:-right-44 w-24 md:w-48" />

      </div>

      {/* End Of MEnu */}


      {/* Student Exclusive */}
      <div className="container mb-16 md:my-16 relative md:h-[60vh] rounded-md flex items-center justify-end" style={{ backgroundImage: "url('/assets/background/student.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="w-2/3 md:w-1/3 h-[80%] p-4 md:p-6 border border-black m-2 md:m-10 z-10 rounded-md flex flex-col justify-between items-center">
          <h1 className="text-xl md:text-4xl  font-mont font-semibold text-white"> Exclusive deals, for students!</h1>
          <p className=" mt-4 text-white">Flash your student ID and enjoy all hot drinks for only £1.20 to have the perfect sip in chilly days. Whether you're into bold coffees, special chaii or so-delicious hot chocolates, we've got your taste buds covered!</p>
          <button className="button hidden md:block">Contact Now</button>
        </div>
        <div className="w-2/3 h-full bg-gradient-to-r from-transparent to-green absolute"> </div>
      </div>
      {/* End Of Student */}



      {/* Try Our Special Items */}
      <div className="container pb-16  md:py-16 flex gap-6 ">
        <div>
          <img src="/assets/menu/rice.png" className="rounded-md md:rounded-none" />
          <div className="w-full md:w-2/3 md:pl-6">
            <div className="my-4 flex flex-col gap-2 pb-4">
              <p className="">waiting for you</p>
              <h1 className="text-2xl md:text-4xl  font-mont font-semibold">Try Our Special Items</h1>
              <p>Enjoy the tender meats of your likings with the best biriyani rice in town! Have your plate today to have a lasting impression of Mughal culinary in your tastebud!</p>
            </div>
            <Link to="/contact" className="button "> Contact Now</Link>
          </div>
        </div>
        <img src="/assets/menu/coffee.png" className="w-1/3 hidden md:block" />
      </div>

   

    </div>
  )
}

export default MenuPage