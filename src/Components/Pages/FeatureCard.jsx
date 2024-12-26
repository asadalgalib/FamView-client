import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';

const FeatureCard = ({ service }) => {

    const {image, title,price, description,_id} = service 
    return (
        <motion.div whileHover={{ scale: 1.02 ,transition:{duration: 0.3 } }} className="flex flex-col p-5 bg-green-100 rounded-sm border-2 border-customGreen">
            <div className='flex-1 grid items-center justify-center'>
                <img className='rounded-md'
                    src={image}
                    alt="photo" />
            </div>
            <div className="mt-4">
                <div>
                    <h1 className='text-lg mg:text-xl font-medium'>{title}</h1>
                    <p><span className='text-lg font-medium'>Description :</span> {description}</p>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <p className='text-lg font-medium'>Price : {price} BDT</p>
                    <Link to={`/service/details/${_id}`}><motion.button whileTap={{ scale: 0.9 }} className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen flex items-center gap-2">Details <FaArrowRightLong /></motion.button></Link>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureCard;