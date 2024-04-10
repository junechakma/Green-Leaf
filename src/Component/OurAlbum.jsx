
function OurAlbum() {
    return (
        <>
            {/* Our Album */}
            <div className="container py-16 relative">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl md:text-6xl font-semibold pb-6 md:py-10">Our Album</h1>
                    <p className="md:w-1/2 text-center text-sm md:text-base">From steaming cups of chai to delicious desserts, each snapshot tells a story of warmth, laughter, and unforgettable experiences. </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-6 space-y-4 space-x-4 md:space-x-4 pt-10 items-end" >
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
                        {/* <img src="/assets/gallery/33.png" /> */}
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

            {/* End of  Our Album */}
        </>
    )
}

export default OurAlbum