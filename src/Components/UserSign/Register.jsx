import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Google from '../Shared/Google';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, user, setUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error('Password must be atleast six character');
            return;
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(password)) {
            toast.error('Password must have an Uppercase or Lowercase letter');
            return;
        }
        if (user) {
            toast.error('You are Logged in, Logout first');
            return;
        }

        createUser(email, password)
            .then(result => {
                setUser(result.user);
                updateUserProfile({ displayName: name, photoURL: photo })
                toast.success('Signup successful');
                form.reset();
                navigate('/');
            })
            .catch(err => {
                toast.error(err.code);
            })
    }

    return (
        <div className='bg-base-100'>
            <div className='py-10 md:py-14 px-4 md:px-auto flex flex-col justify-center items-center'>
                <div className="p-10 rounded-lg bg-customBlue w-full max-w-md shrink-0">
                    <h1 className="mb-2 text-3xl text-center text-white font-medium">Start For Free Today</h1>
                    <p className='text-center text-[#FFFFFF99]'>Access to all features. No credit card required.</p>
                    <Google></Google>
                    <p className='text-white text-center mt-3'>OR</p>
                    <form onSubmit={handleRegister} className="">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFFFFF99]">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFFFFF99]">Photo</span>
                            </label>
                            <input type="url" placeholder="Photo URL" name="photo" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFFFFF99]">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#FFFFFF99]">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <button className="rounded-sm btn btn-outline bg-accent hover:bg-accent border-none w-full text-white my-4 text-lg">Register</button>
                        </div>
                    </form>
                    <div className='flex justify-center items-center'>
                        <p className='text-[#FFFFFF99]'>Already have an account? <NavLink to={'/login'}><button className='font-medium ml-2 text-white'>Login</button></NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;