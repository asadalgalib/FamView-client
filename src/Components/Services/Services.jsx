import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { toast } from 'react-toastify';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/services')
            .then(res => {
                console.log(res.data);
                setServices(res.data);
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [])

    return (
        <div className=' px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl font-semibold'>Explore Our Services</h1>
                <p className='text-center mx-auto max-w-lg mt-2'>Explore a wide range of services available in your area.
                    Read honest, detailed reviews from customers who have used the service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;