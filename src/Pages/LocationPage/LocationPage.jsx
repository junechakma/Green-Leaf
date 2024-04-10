import HeroPage from "../../Component/HeroPage"

const heroData = {
  title: "Our Locations",
  subtitle: "Visit our outlets nearest to you, for your ultimate convenience!",
  image: "/assets/location/hero.png"
}

function LocationPage() {
  return (
    <div className="bg-snowDrift">
      <HeroPage title={heroData.title} description={heroData.subtitle} img={heroData.image} />

      {/* map */}
      <div className="bg-white py-16 ">

        <div className="container ">
          <h1 className=" text-2xl md:text-4xl font-semibold pb-6">Explore exquisite brews and beverages with us!</h1>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158924.14396897567!2d-0.30385514946713454!3d51.50973473426717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761dd24b7eb89d%3A0xddab3c1aa60eb44f!2sGreen%20Leaf%20Cafe!5e0!3m2!1sen!2sbd!4v1712251530246!5m2!1sen!2sbd" className="w-full h-[50vh] rounded-md" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>

      {/* Time Tables */}
      <div className="container my-16 grid grid-cols-1 md:grid-cols-2 ">
        <img src="./assets/location/shop1.png" />
        <div className="py-10">
          <p className="text-xl md:text-2xl text-secondary">Our Shop - 1</p>
          <h1 className="text-2xl md:text-4xl font-semibold pb-3 md:pb-6">Green Leaf Cafe</h1>
          <p className="text-gray-500">112, 116 Whitechapel Rd, London E1 1HJ, United Kingdom</p>

          {/* Shedule */}
          <div className="my-10 md:my-16 ">
            {/* Monday */}
            <div className="grid grid-cols-3 gap-x-2 md:gap-x-4">
              <p className="uppercase font-semibold">Monday</p>
              <hr className="border-gray-400 border-dashed my-2 " />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Tuesday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Tuesday</p>
              <hr className="w-1/2 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Wednesday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Wednesday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Thursday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Thursday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Friday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Friday</p>
              <hr className="w-1/2 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Saturday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Saturday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Sunday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Sunday</p>
              <hr className="w-1/3 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">Closed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container md:py-16 grid grid-cols-1 md:grid-cols-2  ">
        <img src="./assets/location/shop1.png" className="order-1 md:order-2 md:place-self-end" />
        <div className="py-10 order-1" >
          <p className="text-xl md:text-2xl text-secondary">Our Shop - 1</p>
          <h1 className="text-2xl md:text-4xl font-semibold pb-3 md:pb-6">Green Leaf Cafe</h1>
          <p className="text-gray-500">112, 116 Whitechapel Rd, London E1 1HJ, United Kingdom</p>

          {/* Shedule */}
          <div className="my-16 ">
            {/* Monday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Monday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Tuesday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Tuesday</p>
              <hr className="w-1/2 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Wednesday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Wednesday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Thursday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Thursday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Friday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Friday</p>
              <hr className="w-1/2 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Saturday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Saturday</p>
              <hr className="border-gray-400 border-dashed my-2" />
              <p className="uppercase font-semibold">10.00 AM - 11.00 PM</p>
            </div>

            {/* Sunday */}
            <div className="grid grid-cols-3 gap-x-4">
              <p className="uppercase font-semibold">Sunday</p>
              <hr className="w-1/3 border-gray-400 border-dashed my-2 justify-self-end" />
              <p className="uppercase font-semibold">Closed</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LocationPage