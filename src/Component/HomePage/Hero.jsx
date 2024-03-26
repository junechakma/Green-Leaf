import React from 'react'

function Hero() {
    return (
        <div className='bg-cream w-full h-[100vh]'>
            <div className='container flex items-center justify-center'>
                <h1 className='font-brown-wall text-7xl'>Taste</h1>
                <img src='/assets/homepage/hero.png' className='w-[40vw] rounded-full'/>
                <h1 className='font-brown-wall text-7xl'>Coffee</h1>
            </div>
        </div>
    )
}

export default Hero