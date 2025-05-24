//Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

//Required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

//Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-router'

const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row gap-4 h-[80vh] ">
            <div className="p-5 text-center flex flex-col justify-center items-center gap-3">
                <h2 className="text-2xl md:text-4xl font-bold text-cyan-500 mb-5">
                    <Typewriter
                    words={[
                    'Find the Perfect Roommates, Anytime, Anywhere',
                    'Your Next Home Starts Here',
                    'Connect with Like-Minded People'
                    ]}
                    loop={0}
                    
                    />
                </h2>
                <p className="text-gray-700"> Whether you're moving to a new city or just want someone who matches your lifestyle, FindMates helps you connect with verified, like-minded roommates — safely and effortlessly.
                    You can also share your room space with those looking for a room rent.

                </p>
                <div className="flex gap-3 mt-6">
                    <Link to="/browse-listings" className="btn btn-info text-white">Browse Listings </Link>
                    <Link to="/add-to-find-roommate" className="btn btn-outline hover:text-white btn-info">Add to Find Roommates</Link>
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="w-full h-[500px]"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/h1LQhj4W/pexels-charles-parker-5845536.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 1"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white ">
                        <h2 className="text-2xl md:text-4xl font-bold my-4">
                            Find Your Perfect Roommate, Stress-Free
                            </h2>
                        <p className="text-lg md:text-xl max-w-xl mb-6">
                            Tired of random roommate matches? Our platform helps you find roommates who align with your values, lifestyle, and preferences. Whether you're a student or working professional, find the right person and the right space — effortlessly and securely.
                        </p>
                        <a href='#featured-posts' className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 font-semibold">
                            Get Started
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/Kj9tSWQf/pexels-heyho-6207951.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 2"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white ">
                        <h2 className="text-2xl md:text-4xl font-bold my-4">Discover Rooms Tailored to Your Lifestyle</h2>
                        <p className="text-lg md:text-xl max-w-xl mb-6">
                            Set your location, budget, and room type — we’ll do the rest. With a personalized search experience and verified listings, finding a room that fits your lifestyle has never been easier.
                        </p>
                        <a href='#featured-posts' className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 font-semibold">
                            Get Started
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/k2MWbfwW/pexels-charles-parker-5845547.jpg"
                        className="w-full h-full object-cover"
                        alt="Slide 3"
                    />
                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white ">
                        <h2 className="text-2xl md:text-4xl font-bold my-4">🤝 Safe, Simple & Smart Roommate Matching</h2>
                        <p className="text-lg md:text-xl max-w-xl mb-6">
                            We prioritize your safety and comfort. Every listing is reviewed and each connection is built on shared preferences.
                        </p>
                       <a href='#featured-posts' className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 font-semibold">
                            Get Started
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Hero;