import { useState } from "react";
import HeroPage from "../../Component/HeroPage"
import OurAlbum from "../../Component/OurAlbum"
import { Link } from "react-router-dom";

function GalleryPage() {

  const heroData = {
    title: "Our Gallery",
    subtitle: "In Green Leaf, we believe in proper bondings, refreshment and enjoyment around cups of chaii, or any items which you can enjoy together and share from our diverse range of offerings.",
    image: "/assets/background/hero1.png"
  }

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (id) => {
    setSelectedImage(`/assets/gallery/gal/${id}.png`);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative bg-snowDrift">

      {/* Hero */}
      <HeroPage title={heroData.title} description={heroData.subtitle} img={heroData.image} img2={heroData.image} />
      <img src="/assets/background/tea-bag.png" className="absolute  left-6 rotate-12 w-24 md:w-36" />

      {/* Our Album */}
      <OurAlbum />


      {/* Gallery  */}
      <div className="container md:py-16 relative" >
      <img src="/assets/background/olive.png" className="absolute -top-20  right-0 rotate-0 w-24 md:w-40" />
        <h1 className="text-2xl md:text-6xl font-semibold text-center pb-6 md:py-10">Gallery</h1>

        <div className=" grid grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-4">
          <div className="col-span-2 " onClick={()=>openImage("112")} >
            <img src="/assets/gallery/gal/112.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("31")}>
            <img src="/assets/gallery/gal/31.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("41")}>
            <img src="/assets/gallery/gal/41.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("12")}>
            <img src="/assets/gallery/gal/12.png" className="w-full h-full" />
          </div> 
          <div className="row-span-2" onClick={()=>openImage("223")}>
            <img src="/assets/gallery/gal/223.png" className="w-full h-full" />
          </div>
          <div className="col-span-2" onClick={()=>openImage("22")}>
            <img src="/assets/gallery/gal/22.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("13")}>
            <img src="/assets/gallery/gal/13.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("33")}>
            <img src="/assets/gallery/gal/33.png" className="w-full h-full" />
          </div>
          <div onClick={()=>openImage("43")}>
            <img src="/assets/gallery/gal/43.png" className="w-full h-full" />
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50 ">
          <div className="max-w-screen-lg w-full">
            <img src={selectedImage} className="w-full h-auto" alt="Selected Image" />
            <button onClick={closeImage} className="absolute top-4 right-4 text-white text-4xl hover:text-sec">&times;</button>
          </div>
        </div>
      )}
      {/* End of Gallery */}

      {/* CTO */}
      <div className="my-16 w-full h-[60vh] relative flex items-center " style={{ backgroundImage: "url('/assets/gallery/bg1.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="container z-10">
          <h1 className="text-2xl md:text-4xl font-bold text-white pb-4 hidden md:block">Have an amazing time with your  <br /> liked and loved ones!</h1>
          <h1 className="text-2xl md:text-4xl font-bold text-white pb-4 block md:hidden">Have an amazing time with your  liked and loved ones!</h1>
          <p className=" text-white pb-4 hidden md:block">Had a hectic day? Freshen up with fine cups  of the best beverages <br /> brewed through our store pick-up system!</p>
          <p className=" text-white pb-4 block md:hidden">Had a hectic day? Freshen up with fine cups  of the best beverages brewed through our store pick-up system!</p>
          <Link to="/contact" className="button">Order Now</Link>
        </div>

        <img src="/assets/background/olive.png" className="absolute  -top-32 rotate-180  w-24 md:w-40" />
        <img src="/assets/gallery/coffee_bean.png" className="w-[350px] md:w-[500px] absolute right-0 bottom-0" />
        <img src="/assets/gallery/cup.png" className="w-28 md:w-52 absolute right-0 md:right-36 bottom-0 md:bottom-10" />
      </div>

    </div>
  )
}

export default GalleryPage