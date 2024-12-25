import React from 'react';
import { motion } from "motion/react"
import { IoStar, IoStarHalf } from 'react-icons/io5';

const ReviewCard = ({ data }) => {

    const { name, email, photo, rating, review } = data
    return (
        <motion.div whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} className="flex flex-col p-5 bg-green-100 rounded-sm border-2 border-customGreen">
            <div className='flex-1 flex items-center justify-center'>
                <img className='rounded-full w-20'
                    src={photo}
                    alt="Shoes" />
            </div>
            <div className="mt-4 lex items-center justify-center">
                <h1 className='text-center text-xl font-medium'>{name}</h1>
                <div className='flex items-center justify-center gap-2'>
                    <p className='font-medium'>Rating : {rating}</p>
                    <p className='flex items-center justify-center text-yellow-400'><IoStar /><IoStar /><IoStar /><IoStar /> <IoStarHalf /></p>
                </div>
                <p className='text-center'><span className='font-medium'>Review :</span> {review}</p>
            </div>
        </motion.div>
    );
};

export default ReviewCard;