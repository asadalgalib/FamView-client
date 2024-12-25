import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();

    const { image, title, price, description, category, _id, date, companyName, email, website, reviewCount } = service
    return (
        <div className='bg-base-200 p-4 md:p-6 lg:p-10 mx-4 md:mx-12 lg:mx-28 my-8 md:my-6 lg:my-10'>
            <div className=''>
                <div>
                    <h1 className='text-center text-2xl lg:text-4xl font-semibold'>Details of {category} Services</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-10 mt-10 justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-lg md:text-xl font-medium'>{title}</h1>
                        <p><span className='text-lg font-medium'>Category : </span> {category}</p>
                        <p><span className='text-lg font-medium'>Company : </span> {companyName}</p>
                        <p><span className='text-lg font-medium'>Website : </span> {website}</p>
                        <p><span className='text-lg font-medium'>Price :</span> {price} BDT</p>
                        <p><span className='text-lg font-medium'>Contact :</span> {email}</p>
                        <p><span className='text-lg font-medium'>Added Date :</span> {date}</p>
                        <p><span className='text-lg font-medium'>Review Count :</span> {reviewCount}</p>
                        <p><span className='text-lg font-medium'>Description : </span> {description}</p>
                    </div>
                    <div>
                        <figure className='bg-green-100 p-5 border border-customGreen rounded-sm'>
                            <img src={image} className='rounded-sm' alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;