import React, { useContext } from 'react';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../../Context/AuthProvider';

const RateComponent = () => {
    const { rating, setRating } = useContext(AuthContext)

    const handleRating = (rate) => {
        setRating(rate * 2);
    };

    const handleReset = () => {
        setRating(0);
    };

    return (
        <div className='grid md:grid-cols-2 items-center'>
            <Rating onClick={handleRating} initialValue={rating} allowHalfIcon />
            <div className='flex items-center mt-5 md:mt-0'>
                <p className='flex-1 text-black text-lg font-semibold'>Your Rating :  {rating}</p>
                <button onClick={handleReset} className="py-1 px-6 font-semibold text-lg rounded-full bg-customGreen hover:bg-customBlue text-white  ">Reset</button>
            </div>
        </div>
    );
}

export default RateComponent;