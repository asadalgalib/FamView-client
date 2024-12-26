import React from 'react';
import errimg from '../../assets/10740175.jpg'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { motion } from "motion/react"

const ErrorPage = () => {
    return (
        <div className='flex flex-col gap-10 items-center justify-center min-h-screen'>
            <div className=''>
                <img className='max-w-lg' src={errimg} alt="" />
            </div>
            <div className=''>
                <Link to={'/'}><motion.button whileTap={{ scale: 0.94 }} className='py-2 text-white font-medium px-6 rounded-sm bg-customGreen flex items-center justify-center gap-4'> Go Back to Home <FaArrowAltCircleRight></FaArrowAltCircleRight></motion.button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;