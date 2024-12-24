import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const Google = () => {
    return (
        <div className='flex justify-center items-center mt-5'>
            <button className="btn btn-outline rounded-sm text-white border-none bg-customGreen w-full text-lg"><FaGoogle></FaGoogle>Continue with Google</button>
        </div>
    );
};

export default Google;