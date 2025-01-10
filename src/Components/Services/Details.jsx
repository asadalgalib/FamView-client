import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const service = useLoaderData();

    const { image, title, price, description, category, _id, date, companyName, email, website, reviewCount } = service

    useEffect(() => {
                document.title = "FamView - Details";
            }, []);
    return (
        <div className='bg-base-200 p-4 md:p-6 lg:p-10 mx-4 md:mx-12 lg:mx-28 my-8 md:my-6 lg:my-10'>
            <div className='rounded'>
                <div>
                    <h1 className='text-center text-2xl lg:text-4xl font-semibold text-neutral'>Details of {category} Services</h1>
                </div>
                <div className='grid lg:grid-cols-2 gap-10 mt-10 justify-between items-center'>
                    <div className='space-y-2'>
                        <h1 className='text-lg md:text-xl font-medium text-neutral'>{title}</h1>
                        <p><span className='text-lg font-medium text-neutral'>Category : </span> {category}</p>
                        <p><span className='text-lg font-medium text-neutral'>Company : </span> {companyName}</p>
                        <p><span className='text-lg font-medium text-neutral'>Website : </span> {website}</p>
                        <p><span className='text-lg font-medium text-neutral'>Price :</span> {price} BDT</p>
                        <p><span className='text-lg font-medium text-neutral'>Contact :</span> {email}</p>
                        <p><span className='text-lg font-medium text-neutral'>Added Date :</span> {date}</p>
                        <p><span className='text-lg font-medium text-neutral'>Review Count :</span> {reviewCount}</p>
                        <p><span className='text-lg font-medium text-neutral'>Description : </span> {description}</p>
                    </div>
                    <div>
                        <figure className='bg-green-100 p-5 border border-customGreen rounded-sm grid items-center justify-center'>
                            <img src={image} className='rounded-sm' alt="" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;