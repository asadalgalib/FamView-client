import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { motion } from "motion/react"

const FeatureCard = ({ service }) => {
    console.log(service);
    const {image, title,price, description} = service 
    return (
        <motion.div whileHover={{ scale: 1.02 ,transition:{duration: 0.3 } }} className="flex flex-col p-5 bg-green-100 rounded-sm border-2 border-customGreen">
            <div className='flex-1'>
                <img className='rounded-md'
                    src={image}
                    alt="Shoes" />
            </div>
            <div className="mt-4">
                <div>
                    <h1 className='text-lg mg:text-xl font-medium'>{title}</h1>
                    <p><span className='text-lg font-medium'>Description :</span> {description}</p>
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <p className='text-lg font-medium'>Price : {price} BDT</p>
                    <motion.button whileTap={{ scale: 0.9 }} className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen flex items-center gap-2">Details <FaArrowRightLong /></motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default FeatureCard;