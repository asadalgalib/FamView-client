import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { toast } from 'react-toastify';
import FeatureCard from './FeatureCard';

const Feature = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/feature')
            .then(res => {
                console.log(res.data);
                setServices(res.data);
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [])

    return (
        <div className='bg-base-200 min-h-screen px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center'>
                <div>
                    <h1 className='text-center text-2xl lg:text-4xl font-semibold lg:text-left'>Featured Services</h1>
                    <p className='text-center lg:text-left max-w-md mt-2'>Featured services ensures quality, reliability, and customer satisfaction, exceeding expectations every time.</p>
                </div>
                <div>
                    <button className='flex items-center font-semibold gap-3 text-customGreen mt-2 lg:mt-0'>View All <FaArrowCircleRight></FaArrowCircleRight> </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5'>
                {
                    services.map(service =><FeatureCard key={service._id} service={service}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;