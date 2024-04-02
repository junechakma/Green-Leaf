
function HeroPage() {
    return (
        <div className='h-screen flex items-center justify-center bg-black' style={{ backgroundImage: "url('/assets/background/hero1.png')", backgroundSize: 'cover', backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
            <div className='w-1/3 flex flex-col gap-6 items-center justify-center'>
                <h1 className='text-6xl font-medium text-white'>Our Menu</h1>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia debitis fugiat iste, officiis nisi nam numquam laboriosam recusandae ratione eveniet consectetur molestiae facere in labore sit accusantium. Veniam, nostrum iusto!</p>
            </div>
        </div>
    )
}

export default HeroPage