import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Services = () => {
    const [dataLoading, setDataLoading] = useState(true)
    const [filteredService, setFilteredService] = useState([]);
    const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure();
    const [filterCategory, setFilterCategory] = useState('All');

    useEffect(() => {
        axiosSecure.get('/services')
            .then(res => {
                setServices(res.data);
                setFilteredService(res.data);
                setDataLoading(false)
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [])

    useEffect(() => {
        document.title = "FamView - Services";
    }, []);

    const handleOnChange = input => {
        const inValue = input.target.value;
        const lowValue = inValue.toLowerCase();
        const filteredData = services.filter(data => {
            return data.title.toLowerCase().includes(lowValue);
        })
        setFilteredService(filteredData);
    }

    const handleCategory = e => {
        const form = e.target;
        setFilterCategory(form.value);
    }

    useEffect(() => {

        if (filterCategory == 'All') {
            setFilteredService(services);
        }
        else {
            const filteredData = services.filter(data => {
                return data.category.includes(filterCategory);
            })
            setFilteredService(filteredData)
        }

    }, [filterCategory])

    if (dataLoading) {
        return <div className='min-h-screen flex justify-center items-center'><span className="loading loading-spinner text-customGreen"></span></div>
    }
    return (
        <div className=' px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div className='flex flex-col gap-5 lg:flex-row items-center justify-between'>
                <div>
                    <h1 className='text-center lg:text-left text-2xl lg:text-4xl font-semibold'>Explore Our Services</h1>
                    <p className='text-center lg:text-left mx-auto max-w-lg mt-2'>Explore a wide range of services available in your area.
                        Read honest, detailed reviews from customers who have used the service.</p>
                </div>
                <div>
                    <div>
                        <label className="input input-bordered border-customGreen flex items-center gap-2">
                            <input onChange={handleOnChange} type="text" className="grow" name='search' placeholder="Search by title" />
                            <button>
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
                            </button>
                        </label>
                    </div>
                    <select onChange={handleCategory} name="category" className="select select-bordered border-customGreen mt-3 w-full">
                        <option value='All'>All</option>
                        <option value='Technology'>Technology</option>
                        <option value='Food'>Food</option>
                        <option value='Clothings'>Clothings</option>
                        <option value='Beauty'>Beauty</option>
                        <option value='Bars'>Bars</option>
                        <option value='Hospital'>Hospital</option>
                    </select>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8'>
                {
                    filteredService.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;