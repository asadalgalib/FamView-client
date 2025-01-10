import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Context/AuthProvider';
import { motion } from "motion/react"

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const handleTheme = () => {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme',
            htmlElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
        );
    };

    const theme =
        <button onClick={handleTheme} className="flex ml-3 my-2 cursor-pointer gap-2 text-neutral">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </button>

    const links = <>
        <li className='text-white font-medium lg:rounded-sm links'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/services'}>Services</NavLink></li>
        {
            user && <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/addservice'}>Add Service</NavLink></li>
        }
        {
            user && <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/myservice'}>My Service</NavLink></li>
        }
        {
            user && <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/myreview'}>My Review</NavLink></li>
        }
        {
            user == null ?
                <li className='text-white font-medium  lg:rounded-sm md:hidden'><NavLink to={'/login'}>Login</NavLink></li> :
                <li onClick={logOutUser} className='text-white font-medium  lg:rounded-sm md:hidden'>Logout</li>
        }
        <li className='text-white font-medium  lg:rounded-sm md:hidden'><NavLink to={'/register'}>Register</NavLink></li>
    </>
    return (
        <div className="flex items-center sticky top-0 z-50 justify-between navbar px-4 md:px-8 lg:px-20 bg-primary">
            <div className="flex items-center py-2">
                <div className="dropdown mr-5">
                    <div tabIndex={0} role="button" className="text-white bg-customGreen menu menu-dropdown lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content bg-customBlue text-white w-52 p-4 space-y-2 mt-5 rounded-sm shadow">
                        {links}
                        {theme}
                    </ul>

                </div>
                <div className=" text-3xl font-semibold text-white">FamView</div>
                <div className="hidden ml-24 lg:flex items-center gap-5">
                    <ul className=" flex gap-4 space-x-4">
                        {links}
                    </ul>
                    {theme}
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    {
                        user == null ?
                            <motion.button whileTap={{ scale: 0.94 }} className="py-2 text-white font-medium px-6 rounded-sm bg-accent hidden md:inline"><Link to={'/login'}>Login</Link></motion.button>
                            :
                            <motion.button whileTap={{ scale: 0.94 }} onClick={logOutUser} className="py-2 text-white font-medium px-6 rounded-sm bg-accent hidden md:inline">Logout</motion.button>
                    }
                </div>
                <div className="">
                    {
                        user == null ?
                            <motion.button whileTap={{ scale: 0.94 }} className="py-2 text-white font-medium px-6 rounded-sm bg-accent hidden md:inline"><Link to={'/register'}>Register</Link></motion.button>
                            :
                            <div className="w-14 rounded-full ">
                                <img className='btn btn-ghost btn-circle avatar'
                                    alt="user"
                                    src={user.photoURL} />
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
