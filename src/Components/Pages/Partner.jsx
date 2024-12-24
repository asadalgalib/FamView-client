import React from 'react';
import devPro from '../../assets/icons8-coding-64.png'
import makeUp from '../../assets/icons8-make-up-64.png'
import beer from '../../assets/icons8-beer-80.png'
import Fashonista from '../../assets/icons8-h-and-m-100.png'

const Partner = () => {
    return (
        <div className=' px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl font-semibold'>Meet Our Partners</h1>
                <p className='text-center mx-auto max-w-md mt-2'>Featured services ensures quality, reliability, and customer satisfaction, exceeding expectations every time.</p>
            </div>
            <div className='grid md:grid-cols-2 gap-10 mt-8'>
                <div className='space-y-3'>
                    <div>
                        <figure>
                            <img src={devPro} className='w-20' alt="" />
                        </figure>
                        <div>
                            <h1 className=' text-2xl font-semibold'>DevPro Solutions</h1>
                            <p className='max-w-xl mt-2'>DevPro Solutions is a leading IT company known for delivering innovative software solutions tailored to diverse business needs. With a client-centric approach, they prioritize personalized service and seamless communication. Backed by a highly skilled team, DevPro Solutions ensures top-quality.</p>
                        </div>
                    </div>
                    <div>
                        <figure>
                            <img src={Fashonista} className='w-20' alt="" />
                        </figure>
                        <div>
                            <h1 className='text-2xl  font-semibold'>Fashionista Apparel</h1>
                            <p className='max-w-xl mt-2'>Fashionista Apparel stands out for its premium-quality shirts crafted with impeccable attention to detail, ensuring style and durability. The company prioritizes sustainable practices, using eco-friendly materials in their production. With a customer-focused approach, Fashionista Apparel offers trendy designs that cater to diverse preferences.</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-3'>
                    <div>
                        <figure>
                            <img src={makeUp} className='w-20' alt="" />
                        </figure>
                        <div>
                            <h1 className='text-2xl font-semibold '>Beauty Bliss Co.</h1>
                            <p className='max-w-xl mt-2'>Beauty Bliss Co. is renowned for its high-quality, cruelty-free makeup products that enhance natural beauty. The company offers a wide range of shades and formulas, ensuring inclusivity for all skin tones. With a commitment to innovation, Beauty Bliss Co. consistently introduces trendy and effective beauty solutions.</p>
                        </div>
                    </div>
                    <div>
                        <figure>
                            <img src={beer} className='w-20' alt="" />
                        </figure>
                        <div>
                            <h1 className=' text-2xl font-semibold'>Golden Hops Brewery</h1>
                            <p className='max-w-xl mt-2'>Golden Hops Brewery is celebrated for crafting rich, flavorful beers using the finest ingredients and traditional brewing techniques. The company offers a diverse range of unique brews, catering to both craft beer enthusiasts and casual drinkers. With a focus on sustainability, Golden Hops Brewery is committed to eco-friendly practices in its production process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;