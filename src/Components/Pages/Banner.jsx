import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Healt from '../../assets/HealtCare.jpg'
import Home from '../../assets/Home.jpg'
import Hospital from '../../assets/clean-empty-hospital-ward-ready-receive-patients-reflecting-modern-medical-care.jpg'
import Medium from '../../assets/medium-shot-woman-working-luxury-restaurant.jpg'

const Banner = () => {


    return (
        <div className='h-auto md:h-[640px] flex items-center'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true}>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 max-w-xl'>
                                <h1 className='text-2xl md:text-4xl font-semibold max-w-lg'>Find the Services You Need, Backed by Real Reviews</h1>
                                <p className='mt-5'>Explore a wide range of services available in your area, from restaurants to home repairs.
                                    Read honest, detailed reviews from customers who have used the service.
                                    Make confident choices knowing you're relying on trusted experiences.
                                    Join a community where your feedback helps others make better decisions.</p>

                                <label className="input border border-customGreen flex items-center justify-between mt-5">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 cursor-pointer opacity-80">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                    <button className='bg-customGreen py-2 px-6 ml-4 rounded-md text-white font-medium'>Categories</button>
                                </label>
                            </div>
                            <div>
                                <img src={Healt} className='rounded-md h-64 md:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 max-w-xl'>
                                <h1 className='text-2xl md:text-4xl font-semibold max-w-lg'>Your Voice Makes Difference in Choosing Right Services</h1>
                                <p className='mt-4'>Share your experiences with the services you've used, from healthcare to tech support.
                                    Your reviews provide valuable insights to others looking for the best options.
                                    Help create a space where every service provider is transparent and accountable.
                                </p>

                                <label className="input border border-customGreen flex items-center gap-2 mt-4">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <div>
                                <img src={Medium} className='rounded-md h-72 md:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 max-w-xl'>
                                <h1 className='text-2xl md:text-4xl font-semibold max-w-lg'>Discover the Best Providers with Customer Feedback</h1>
                                <p className='mt-4'>Navigate through thousands of service options with confidence and ease.
                                    Read reviews from real people who have experienced the services firsthand.
                                    Save time by finding highly rated providers that match your specific needs.
                                    Help improve the service landscape by sharing your honest opinion with others.</p>

                                <label className="input border border-customGreen flex items-center gap-2 mt-4">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <div>
                                <img src={Hospital} className='rounded-md h-72 md:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 max-w-xl'>
                                <h1 className='text-2xl md:text-4xl font-semibold max-w-lg'>Rate, Review, and Help Others Find the Best Services</h1>
                                <p className='mt-4'>Contribute your feedback to guide others in choosing the best service providers.
                                    Whether it's a restaurant, repair service, or personal care provider, your voice matters.
                                    Get insights from a community of users just like you, making smarter service choices.
                                </p>

                                <label className="input border border-customGreen flex items-center gap-2 mt-4">
                                    <input type="text" className="grow" placeholder="Search" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>
                            </div>
                            <div>
                                <img src={Home} className='rounded-md h-72 md:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>




            </Swiper>
            {/* <div className="hero">
                <div className="hero-overlay bg-opacity-60 py-80"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <p className='text-lg md:text-2xl font-semibold text-yellow-300'>MOFLEX</p>
                        <h1 className="mb-5 text-3xl md:text-5xl text-white font-bold mt-1">Unlimited Movie, TVs Shows, & More</h1>
                        <button className='py-1 px-6 bg-transparent border-2 hover:border-none border-yellow-300 hover:text-black text-white hover:bg-yellow-300 btn font-semibold text-xl mt-1 '>Watch Now <FaPlay></FaPlay></button>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;

{/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true}>
                {
                    slides.map((img, index) => <SwiperSlide key={index}>
                        <div
                            className="hero"
                            style={{
                                backgroundImage: `url(${img})`,
                            }}>
                            <div className="hero-overlay bg-opacity-60 py-80"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <p className='text-lg md:text-2xl font-semibold text-yellow-300'>MOFLEX</p>
                                    <h1 className="mb-5 text-3xl md:text-5xl text-white font-bold mt-1">Unlimited Movie, TVs Shows, & More</h1>
                                    <button className='py-1 px-6 bg-transparent border-2 hover:border-none border-yellow-300 hover:text-black text-white hover:bg-yellow-300 btn font-semibold text-xl mt-1 '>Watch Now <FaPlay></FaPlay></button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper> */}