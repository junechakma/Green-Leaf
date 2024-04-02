import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

function Hero() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const controls = useAnimation();

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.clientHeight;
            const scrollableHeight = documentHeight - windowHeight;
            const progress = scrollPosition / scrollableHeight;
            setScrollProgress(progress);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        controls.start({
            rotate: scrollProgress * 360,
            opacity: scrollProgress === 0 ? 1 : 0.5,
            top: scrollProgress === 0 ? `30%` : `${-scrollProgress * 10}%`
        });
    }, [scrollProgress, controls]);

    return (
        <>
            <div className="hidden  h-[100vh] md:flex items-center justify-center relative overflow-hidden bg-cream">
                <motion.div className='container flex items-center justify-center z-10  absolute' style={{ top: `calc(50% - 10vh)` }} animate={{ gap: `calc(20vw - 19vw * ${scrollProgress * 10})` }}>
                    <div className="flex flex-col items-center gap-16">
                        <h2 className="text-secondary text-3xl md:text-5xl font-alumni font-semibold">The true</h2>
                        <h1 className='font-brown-wall text-5xl md:text-7xl'>Taste</h1>
                    </div>
                    <div className="flex flex-col items-center gap-16">
                        <h2 className="text-secondary text-3xl md:text-5xl font-alumni font-semibold">of</h2>
                        <h1 className='font-brown-wall text-5xl md:text-7xl'>Chai</h1>
                    </div>
                </motion.div>
                <motion.img
                    src='/assets/homepage/hero.png'
                    className='w-1/3 md:w-1/4 rounded-full absolute'
                    animate={controls}
                    transition={{ ease: "easeInOut", duration: 0.5 }} // Smoother transition
                />
            </div>

            <div className='md:hidden h-[100vh] flex items-center justify-center bg-cream'>

                <Link to="/" className="flex items-center absolute top-4 left-4">
                    <img src="/assets/logo/logo.png" className="w-20 h-20" />
                </Link>

                <div className='flex flex-col gap-16'>
                    <div className="flex flex-col items-center gap-10">
                        <h2 className="text-secondary text-3xl md:text-5xl font-alumni font-semibold">The true</h2>
                        <h1 className='font-brown-wall text-5xl md:text-7xl'>Taste</h1>
                    </div>

                    <div className='h-[1vh] flex items-center justify-center'>
                        <img
                            src='/assets/homepage/hero.png'
                            className='w-1/3 rounded-full animation-spin '
                        />
                    </div>

                    <div className="flex flex-col items-center gap-10">
                        <h2 className="text-secondary text-3xl md:text-5xl font-alumni font-semibold">of</h2>
                        <h1 className='font-brown-wall text-5xl md:text-7xl'>Chai</h1>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Hero;
