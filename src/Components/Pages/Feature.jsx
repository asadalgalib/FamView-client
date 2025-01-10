import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import FeatureCard from './FeatureCard';
import { motion } from "motion/react"
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Feature = () => {
    const [dataLoading, setDataLoading] = useState(true)
    const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/feature')
            .then(res => {
                setServices(res.data);
                setDataLoading(false)
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [])

    if (dataLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-customGreen"></span></div>
    }
    return (
        <div className='px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
                <div>
                    <h1 className='text-center text-2xl lg:text-4xl font-semibold lg:text-left text-neutral'>Featured Services</h1>
                    <p className='text-center lg:text-left max-w-md mt-2 '>Featured services ensures quality, reliability, and customer satisfaction, exceeding expectations every time.</p>
                </div>
                <div className='mt-4 lg:mt-0'>
                    <Link to={'/services'}><motion.button whileTap={{ scale: 0.94 }} className='py-2 px-6 border-2 rounded-sm border-customGreen flex items-center font-semibold gap-3 text-customGreen mt-2 lg:mt-0'>View All <FaArrowCircleRight></FaArrowCircleRight> </motion.button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8'>
                {
                    services.map(service => <FeatureCard key={service._id} service={service}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;