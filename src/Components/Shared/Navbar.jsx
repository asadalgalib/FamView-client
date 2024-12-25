import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../Context/AuthProvider';
import { motion } from "motion/react"

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    const links = <>
        <li className='text-white font-medium lg:rounded-sm links'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/services'}>Services</NavLink></li>
        <li className='text-white font-medium  lg:rounded-sm '><NavLink to={'/addservice'}>Add Service</NavLink></li>
        {
            user == null ?
                <li className='text-white font-medium  lg:rounded-sm md:hidden'><NavLink to={'/login'}>Login</NavLink></li> :
                <li onClick={logOutUser} className='text-white font-medium  lg:rounded-sm md:hidden'>Logout</li>
        }
        <li className='text-white font-medium  lg:rounded-sm md:hidden'><NavLink to={'/register'}>Register</NavLink></li>
    </>
    return (
        <div className="flex items-center sticky top-0 z-50 justify-between navbar px-4 md:px-8 lg:px-20 bg-customBlue">
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
                    </ul>
                </div>
                <div className=" text-3xl font-semibold text-white">FamView</div>
                <div className="hidden ml-24 lg:flex">
                    <ul className=" flex gap-4 space-x-4">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="flex gap-4">
                <div>
                    {
                        user == null ?
                            <motion.button whileTap={{ scale: 0.94 }} className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen hidden md:inline"><Link to={'/login'}>Login</Link></motion.button>
                            :
                            <motion.button whileTap={{ scale: 0.94 }} onClick={logOutUser} className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen hidden md:inline">Logout</motion.button>
                    }
                </div>
                <div className="">
                    {
                        user == null ?
                            <motion.button whileTap={{ scale: 0.94 }} className="py-2 text-white font-medium px-6 rounded-sm bg-customGreen hidden md:inline"><Link to={'/register'}>Register</Link></motion.button>
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


<div className="dropdown flex items-center justify-center dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-14 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-sm z-[1] mt-44 text-white bg-customBlue w-44 p-2 shadow">
        <li>
            <a className="justify-between">
                Profile
                <span className="badge bg-customGreen border-none text-white">New</span>
            </a>
        </li>
        <li><Link>Settings</Link></li>
        <li><Link>Logout</Link></li>
    </ul>
</div>