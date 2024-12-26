import React from 'react';
import help from '../../assets/male-employee-holding-speech-bubble-with-text-message-ask-help-while-he-works-laptop-plan-business-strategy-project-manager-showing-card-board-with-writing-cartoon-mockup.jpg'
import { Link } from 'react-router-dom';

const LetsHelp = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat h-[650px] flex flex-col items-end justify-end ' style={{
            backgroundImage: `url(${help})`,
        }}>
            <div className='max-w-2xl bg-black bg-opacity-50 p-10 lg:mb-20 lg:mr-20 rounded-sm'>
                <h1 className="mb-3 text-2xl md:text-4xl text-white font-bold mt-1">Let's Help You</h1>
                <p className=' lg:text-lg font-semibold text-white'>FamView is a review platform open to everyone. Share your experiences to help others make better choices, and help companies up their game. Our mission is to bring people and companies together to create experiences for everyone.</p>
                <Link to={'/login'}><button className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen mt-3">Join us Today</button></Link>
            </div>
        </div >
    );
};

export default LetsHelp;