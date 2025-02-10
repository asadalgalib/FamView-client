import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Healt from '../../assets/HealtCare.jpg'
import Home from '../../assets/Home.jpg'
import Hospital from '../../assets/clean-empty-hospital-ward-ready-receive-patients-reflecting-modern-medical-care.jpg'
import Medium from '../../assets/medium-shot-woman-working-luxury-restaurant.jpg'
import { FaArrowDown } from 'react-icons/fa';
import { motion } from "motion/react"

const Banner = () => {


    return (
        <div className='h-auto lg:h-[640px] flex items-center'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper" loop={true}>

                <SwiperSlide>
                    <div className=" px-4 py-8 lg:py-32 lg:px-32 bg-cover bg-green-100">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.5 } }} className='flex-1 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-black'>Find the Services You Need, Backed by Real Reviews</h1>
                                <p className='mt-5 text-black'>Explore a wide range of services available in your area, from restaurants to home repairs.
                                    Read honest, detailed reviews from customers who have used the service.
                                    Make confident choices knowing you're relying on trusted experiences.
                                    Join a community where your feedback helps others make better decisions.
                                </p>
                            </motion.div>
                            <div>
                                <motion.img initial={{ scale: 0 }} animate={{ scale: 1, transition: { duration: 1.5 } }} src={Healt} className='rounded-md h-64 md:h-72 lg:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-black'>Your Voice Makes Difference in Choosing Right Services</h1>
                                <p className='mt-4 text-black'>Share your experiences with the services you've used, from healthcare to tech support.
                                    Your reviews provide valuable insights to others looking for the best options.
                                    Help create a space where every service provider is transparent and accountable.
                                </p>
                            </div>
                            <div>
                                <img src={Medium} className='rounded-md h-64 md:h-72 lg:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-black'>Discover the Best Providers with Customer Feedback</h1>
                                <p className='mt-4 text-black'>Navigate through thousands of service options with confidence and ease.
                                    Read reviews from real people who have experienced the services firsthand.
                                    Save time by finding highly rated providers that match your specific needs.
                                    Help improve the service landscape by sharing your honest opinion with others.</p>
                            </div>
                            <div>
                                <img src={Hospital} className='rounded-md h-64 md:h-72 lg:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-green-100 px-4 py-8 lg:py-32 lg:px-32 bg-cover">
                        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
                            <div className='flex-1 px-2 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
                                <h1 className='text-2xl lg:text-4xl font-semibold max-w-lg text-black'>Rate, Review, and Help Others Find the Best Services</h1>
                                <p className='mt-4 text-black'>Contribute your feedback to guide others in choosing the best service providers.
                                    Whether it's a restaurant, repair service, or personal care provider, your voice matters.
                                    Get insights from a community of users just like you, making smarter service choices.
                                </p>
                            </div>
                            <div>
                                <img src={Home} className='rounded-md h-64 md:72 lg:h-96 w-full' alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;