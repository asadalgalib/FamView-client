import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Google = () => {
    const { user, setUser, auth, provider } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();

    const handleGoogle = () => {
        if (user) {
            toast.error('You are Logged in, Logout first');
            return;
        }
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
                toast.success('Login successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch(err =>{
                toast.error(err.code);
            })
    }
    return (
        <div className='flex justify-center items-center mt-5'>
            <button onClick={handleGoogle} className="btn rounded text-white border-none bg-accent hover:bg-accent w-full text-lg"><FaGoogle></FaGoogle>Continue with Google</button>
        </div>
    );
};

export default Google;