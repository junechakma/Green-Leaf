import React, { useEffect, useState } from 'react'
import OurAlbum from '../../Component/OurAlbum'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const reviewsData = [
  {
    "name": "James Patel",
    "title": "Chai Nirvana!",
    "description": "I'm in chai heaven every time I step into this cafe. The aroma is intoxicating, and the chai is simply divine. Perfect blend of spices and sweetness. A definite go-to for chai lovers!"
  },
  {
    "name": "Sophie Green",
    "title": "Cozy Chai Haven",
    "description": "This cafe exudes warmth and comfort from the moment you walk in. The chai is the epitome of comfort in a cup—rich, fragrant, and utterly satisfying. A delightful escape from the hustle and bustle of the city."
  },
  {
    "name": "David Nguyen",
    "title": "Chai Perfection",
    "description": "I'm blown away by the quality of chai at this cafe. It's like they've mastered the art of chai-making. Every sip is a burst of flavor that leaves me craving more. The friendly atmosphere is just the cherry on top!"
  },
  {
    "name": "Emma Thompson",
    "title": "Chai Bliss!",
    "description": "If you're a chai lover like me, you need to visit this cafe. The chai here is a revelation—aromatic, flavorful, and utterly addictive. Combine that with the cozy ambiance and welcoming staff, and you've got yourself a winner."
  },
  {
    "name": "Michael Johnson",
    "title": "Chai Delight!",
    "description": "This cafe has quickly become my favorite chai spot in town. The chai is brewed to perfection, striking the perfect balance between spice and sweetness. It's like a warm hug in a cup. Can't recommend it enough!"
  },
  {
    "name": "Rachel Carter",
    "title": "Chai Lover's Paradise",
    "description": "As a chai enthusiast, finding the perfect cup is a never-ending quest. Luckily, I stumbled upon this gem of a cafe. The chai here is nothing short of heavenly—aromatic, flavorful, and oh-so-comforting."
  }
]

function AboutPage() {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='relative bg-snowDrift'>

      {/* Hero */}
      <div className='bg-primary h-screen relative'>
        <div className='container justify-center h-full grid grid-cols-1 md:grid-cols-2 items-center'>
          <div className=' md:order-2 self-end  md:self-center flex justify-end'>
            <img src='/assets/about/coffee-cup2.png' className='w-[80vw] md:w-[40vw] ' />
          </div>
          <div className='self-start md:self-center'>
            <h1 className='text-4xl md:text-7xl font-semibold mb-10 text-center md:text-left'>About Us</h1>
            <p className='md:w-4/5 md:text-xl text-center md:text-left'>
              Welcome to Green Leaf Cafe, where every cup tells a story! Nestled in the heart of the city, our cafe is a cozy haven for chai and coffee enthusiasts alike.
            </p>
          </div>
        </div>
        <img src='/assets/background/coffee-beans.png' className='absolute -bottom-12 md:-bottom-20 right-0 w-28 md:w-56' />
      </div>
      {/* End Of Hero */}


      {/* Enjoy Best */}
      <div className='container mt-16 md:mt-40 bg-primary relative rounded-md grid grid-cols-1 md:grid-cols-2 p-10 gap-10 shadow-md'>
        <div>
          <img src='/assets/about/college.png' className='md:w-[40vw]' />
        </div>
        <div className='flex flex-col  justify-center'>
          <h1 className='text-2xl md:text-6xl font-semibold mb-4 md:mb-10'>Dive in Awesomeness</h1>
          <p className='text-sm md:text-base'>From our rich, aromatic chai to our smooth, velvety coffee, each beverage is crafted with care and precision. Whether you're a chai connoisseur or a coffee aficionado, we've got something that's sure to tantalize your taste buds and leave you craving more.</p>
        </div>
        {/* <img src="/assets/background/olive.png" className="absolute -right-28 bottom-0 rotate-180  w-24 md:w-40" /> */}
      </div>
      {/* End Of Enjoy Best */}

      {/* Our Album */}
      <div className='relative'>
        <OurAlbum />
        <img src="/assets/background/tea-bag.png" className="absolute top-6 left-4 rotate-12 w-20 md:w-36" />
      </div>


      {/* Cozy Ambbience */}
      <div className='my-16 relative container bg-primary rounded-md grid grid-cols-1 md:grid-cols-2 p-10 pb-16 gap-10 md:gap-16'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl md:text-6xl font-semibold mb-6 md:mb-10'>Cozy Ambiance
            and Environment
          </h1>
          <p className='pb-8'>Step into Green Leaf Cafe and enter a world of warmth and hospitality. Our inviting ambiance and friendly staff create the perfect backdrop for catching up with friends, diving into a good book, or simply savoring a moment of tranquility amidst the hustle and bustle of city life.  </p>
          <Link className='text-red-400 font-bold'>WATCH VIDEO</Link>
        </div>
        <div className='border-2 border-secondary w-fit' >
          <iframe src="https://www.youtube.com/embed/Kv1vQyrEOyA?si=v4YH4prsNInwjF0O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className=' h-[30vh] md:h-full w-[70vw] md:w-[34vw] rounded-md relative -left-6 top-6'></iframe>
        </div>
        <img src="/assets/background/olive.png" className="absolute -left-20 top-0 rotate-90  w-24 md:w-40" />
      </div>

      {/* Rating of  */}
      <div>
        <h1 className='text-2xl md:text-4xl w-[70vw] md:w-full mx-auto font-semibold md:mb-10 text-center'>Ratings of people ordering food</h1>

        {
          innerWidth > 700 && (
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              transitionTime={1000}
              className='py-10'
              showArrows={false} // Hide arrows on smaller screens
              showStatus={false} // Hide status indicators on smaller screens
              showThumbs={false} // Hide thumbnail images on smaller screens
              swipeable // Allow swiping on touch devices
              emulateTouch // Emulate touch events for non-touch devices
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ background: '#000', width: '10px', height: '10px', display: 'inline-block', margin: '-16px 8px', borderRadius: '50%', cursor: 'pointer' }}
                    />
                  );
                }
                return (
                  <li
                    style={{ background: '#999', width: '8px', height: '8px', display: 'inline-block', margin: '-16px 8px', borderRadius: '50%', cursor: 'pointer' }}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            >
              {/* Slide 1 */}
              <div className='container mb-10 gap-4 flex'>
                {reviewsData.slice(0, 3).map((item, index) => (
                  <div key={index} className='shadow-md p-6 bg-white'>
                    <div className='flex gap-4'>
                      <div className='w-16 h-16 rounded-full bg-gray-500'></div>
                      <div className='flex flex-col items-start'>
                        <h1 className='text-left font-bold text-green'>{item.name}</h1>
                        <p className='text-gray-500 text-sm text-left'>{item.title}</p>
                      </div>
                    </div>
                    <div className='pt-4'>
                      <p className='text-left text-gray-500'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slide 2 */}
              <div className='container items-center gap-4 flex'>
                {reviewsData.slice(3, 6).map((item, index) => (
                  <div key={index} className='shadow-md p-6 bg-white'>
                    <div className='flex gap-4'>
                      <div className='w-16 h-16 rounded-full bg-gray-500'></div>
                      <div className='flex flex-col'>
                        <h1 className='text-left font-bold text-green'>{item.name}</h1>
                        <p className='text-gray-500 text-sm text-left'>{item.title}</p>
                      </div>
                    </div>
                    <div className='pt-4'>
                      <p className='text-left text-gray-500'>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>



            </Carousel>
          )
        }


        {
          innerWidth < 500 && (
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              transitionTime={1000}
              className='py-10'
              showArrows={false} // Hide arrows on smaller screens
              showStatus={false} // Hide status indicators on smaller screens
              showThumbs={false} // Hide thumbnail images on smaller screens

              swipeable // Allow swiping on touch devices
              emulateTouch // Emulate touch events for non-touch devices
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li
                      style={{ background: '#000', width: '10px', height: '10px', display: 'inline-block', margin: '-16PX 8px', borderRadius: '50%', cursor: 'pointer' }}
                      aria-label={`Selected: ${label} ${index + 1}`}
                      title={`Selected: ${label} ${index + 1}`}
                    />
                  );
                }
                return (
                  <li
                    style={{ background: '#999', width: '8px', height: '8px', display: 'inline-block', margin: '-16PX 8px', borderRadius: '50%', cursor: 'pointer' }}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    title={`${label} ${index + 1}`}
                    aria-label={`${label} ${index + 1}`}
                  />
                );
              }}
              centerMode
              centerSlidePercentage={80}
              swipeScrollTolerance={20}
              width="100%"
              style={{ height: innerHeight }} // Set the carousel height dynamically
            >
              {reviewsData.map((item, index) => (
                <div key={index} className='shadow-md p-6 bg-white mx-2 h-full'>
                  <div className='flex gap-4'>
                    <div className='w-16 h-16 rounded-full bg-gray-500'></div>
                    <div className='flex flex-col items-start'>
                      <h1 className='text-left font-bold text-green'>{item.name}</h1>
                      <p className='text-gray-500 text-sm text-left'>{item.title}</p>
                    </div>
                  </div>
                  <div className='pt-4'>
                    <p className='text-left text-gray-500'>{item.description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          )
        }

      </div>

    </div>
  )
}

export default AboutPage