import { Link } from 'react-router-dom';
import img from '../../assets/5351750.jpg'
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "motion/react"

const GiveReview = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col gap-4 items-start justify-center max-w-xl'>
                <h1 className='text-2xl lg:text-4xl font-semibold text-neutral'>Rate us, Review us, and Help Others Find the Best Services</h1>
                <p>Contribute your feedback to guide others in choosing the best service providers.
                    Whether it's a restaurant, repair service, or personal care provider, your voice matters.
                    Get insights from a community of users just like you, making smarter service choices.
                </p>
                <Link to={`/services`}><motion.button whileTap={{ scale: 0.9 }} className="py-2 text-white font-medium px-6 rounded-sm bg-accent flex items-center gap-2">Review Now <FaArrowRightLong /></motion.button></Link>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default GiveReview;