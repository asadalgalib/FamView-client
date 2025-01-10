import React from 'react';
import logo from '../../assets/icons8-v-67.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaX } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="lg:px-40 text-center bg-slate-900 rounded p-10">
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div className='flex flex-col gap-4 items-center'>
                    <img src={logo} alt="" />
                    <p className='text-[#FFFFFF99]'>
                        FamView Solutions
                        <br />
                        Providing Review and user Experience since 2019
                    </p>
                </div>
                <div className='flex flex-col items-center justify-center mt-4'>
                    <div className="text-[#FFFFFF99] grid grid-flow-col gap-4 mb-5">
                        <Link className="link link-hover" to={'/'}>Home</Link>
                        <Link className="link link-hover" to={'/services'}>Service</Link>
                        <Link className="link link-hover" to={'/login'}>Login</Link>
                        <Link className="link link-hover" to={'/register'}>Register</Link>
                    </div>
                    <div>
                        <div className="text-[#FFFFFF99] grid grid-flow-col gap-4">
                            <Link to={'https://github.com/asadalgalib'}><FaGithub className='text-3xl'></FaGithub></Link>
                            <Link to={'https://web.facebook.com/algalib.asad'}><FaFacebook className='text-3xl'></FaFacebook></Link>
                            <Link to={'https://www.instagram.com/asad.ullahgalib/'}><FaInstagram className='text-3xl'></FaInstagram></Link>
                            <Link to={'https://x.com/asadalgalib9'}><FaX className='text-3xl'></FaX></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10'>
                <p className='text-[#FFFFFF99]'><small>Copyright © {new Date().getFullYear()} - All right reserved by FamView Solutions</small></p>
            </div>
        </footer>
    );
};

export default Footer;