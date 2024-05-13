
function HeroPage({ title, description, img, img2 }) {

    const backgroundImageStyle = {
        backgroundImage: `url('${img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    const backgroundImageStyle2 = {
        backgroundImage: `url('${img2}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <>
            <div className={`h-screen items-center justify-center bg-black ${img2 ? "hidden md:flex": "flex md:hidden" }`} style={backgroundImageStyle}>
                <div className='w-1/2 md:w-1/3 flex flex-col gap-6 items-center justify-center'>
                    <h1 className='text-5xl md:text-6xl font-medium text-white text-center'>{title}</h1>
                    <p className='text-white  text-center'>{description}</p>
                </div>
            </div>
            {
                img2 && ( 
                    <div className='h-screen items-center justify-center bg-black  flex md:hidden' style={backgroundImageStyle2}>
                        <div className='w-1/2 md:w-1/3 flex flex-col gap-6 items-center justify-center'>
                            <h1 className='text-5xl md:text-6xl font-medium text-white text-center'>{title}</h1>
                            <p className='text-white  text-center'>{description}</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default HeroPage