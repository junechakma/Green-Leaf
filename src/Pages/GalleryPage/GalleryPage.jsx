import HeroPage from "../../Component/Shared/HeroPage"

function GalleryPage() {
  return (
    <div>
      <HeroPage />

      {/* Our Album */}
      <div className="container py-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-semibold py-10">Our Album</h1>
          <p className="w-1/2 text-center">Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem ipsum dolor sit Lorem ipsum Lorem Lorem ipsum Lorem ipsum sit Lorem ipsum Lorem ipsum dolor</p>
        </div>

        <div className=" grid grid-cols-6 space-x-4 " style={{ alignItems: "flex-end" }}>
          <div className="flex flex-col space-y-4">
            <img src="/assets/gallery/11.png" />
            <img src="/assets/gallery/12.png" />
            <img src="/assets/gallery/13.png" />
          </div>
          <div className="flex flex-col space-y-4 ">
            <img src="/assets/gallery/21.png" />
            <img src="/assets/gallery/22.png" />
            <img src="/assets/gallery/23.png" />
          </div>
          <div className="flex flex-col space-y-4 ">
            <img src="/assets/gallery/31.png" />
            <img src="/assets/gallery/32.png" />
            <img src="/assets/gallery/33.png" />
          </div>
          <div className="flex flex-col space-y-4 ">
            <img src="/assets/gallery/41.png" />
            <img src="/assets/gallery/42.png" />
            <img src="/assets/gallery/43.png" />
          </div>
          <div className="flex flex-col space-y-4 ">
            <img src="/assets/gallery/51.png" />
            <img src="/assets/gallery/52.png" />
            <img src="/assets/gallery/53.png" />
          </div>
          <div className="flex flex-col space-y-4">
            <img src="/assets/gallery/61.png" />
            <img src="/assets/gallery/62.png" />
            <img src="/assets/gallery/63.png" />
          </div>
        </div>
      </div>

      {/* End of Our Gallery */}


      {/* Gallery  */}
      <div className="container py-16" >
        <h1 className="text-6xl font-semibold text-center py-10">Gallery</h1>

        <div className=" grid grid-cols-4 grid-rows-3 gap-4">
          <div className="col-span-2 " >
            <img src="/assets/gallery/gal/112.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/31.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/41.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/12.png" className="w-full h-full" />
          </div>
          <div className="row-span-2" >
            <img src="/assets/gallery/gal/223.png" className="w-full h-full" />
          </div>
          <div className="col-span-2">
            <img src="/assets/gallery/gal/22.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/13.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/33.png" className="w-full h-full" />
          </div>
          <div>
            <img src="/assets/gallery/gal/43.png" className="w-full h-full" />
          </div>
        </div>
      </div>
      {/* End of Gallery */}

      <div className="my-16 w-full h-[60vh] relative flex items-center overflow-hidden" style={{ backgroundImage: "url('/assets/gallery/bg1.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="container ">
          <h1 className="text-4xl font-bold text-white pb-4">Get a chance to have an <br/> Amazing morning</h1>
          <p className=" text-white pb-4">We are giving you are one time opportunity to  <br/>experience a better life with coffee.</p>
          <button className="button">Order Now</button>
        </div>

        <img src="/assets/gallery/coffee_bean.png" className="w-[500px] absolute right-0 bottom-0"/>
        <img src="/assets/gallery/cup.png" className="w-52 absolute right-36 bottom-10"/>
      </div>
    </div>
  )
}

export default GalleryPage