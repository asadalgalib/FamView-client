import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Google from '../Shared/Google';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, setUser, logInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        if (user) {
            toast.error('You are Logged in, Logout first');
            return;
        }

        logInUser(email, password)
            .then(result => {
                console.log(result);
                setUser(result.user);
                toast.success('Login successful');
                form.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                toast.error(err.code);
            })
    }

    return (
        <div className='bg-green-100'>
            <div>
                <div className='py-10 md:py-14 px-4 md:px-auto flex flex-col justify-center items-center'>
                    <div className="p-10 rounded-sm bg-customBlue w-full max-w-md shrink-0">
                        <h1 className="mb-2 text-center text-white text-3xl font-medium">Member Login</h1>
                        <p className='text-center text-[#FFFFFF99]'>Access to all features. No credit card required.</p>
                        <Google></Google>
                        <p className='text-white text-center mt-3'>OR</p>
                        <form onSubmit={handleLogin} className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <button className="label-text-alt link link-hover text-[#FFFFFF99]">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-outline rounded-sm bg-customGreen border-none w-full text-white my-4 text-lg">Login <FaArrowRight></FaArrowRight></button>
                            </div>
                        </form>
                        <div className='flex justify-center items-center'>
                            <p className='text-[#FFFFFF99]'>New to this Website? <NavLink to={'/register'}><button className='font-medium ml-2 text-white'>Register</button></NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Login;