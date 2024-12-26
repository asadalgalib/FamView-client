import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import app from '../Firebase/Firebase.config';
import { toast } from 'react-toastify';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0)
    const [reviews, setReviews] = useState([]);
    const axiosSecure = useAxiosSecure();

    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = data => {
        return updateProfile(auth.currentUser, data)
    }

    const logInUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setUser(null);
        setLoading(true);
        toast.success('Logout Successful')
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);

            if (currentUser?.email) {
                const user = { email: currentUser?.email };
                axiosSecure.post('/jwt/login', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        toast.error(err.code)
                    })
            }
            else {
                axiosSecure.post('/jwt/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('log out', res.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        toast.error(err.code)
                    })
            }

        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        auth, provider, user, setUser, loading, createUser, updateUserProfile, logInUser, logOutUser, rating, setRating,
        reviews, setReviews
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;