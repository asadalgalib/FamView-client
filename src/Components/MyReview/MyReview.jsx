import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { motion } from "motion/react"
import { IoStar, IoStarHalf } from 'react-icons/io5';
import Swal from 'sweetalert2';
import UpdateReview from './UpdateReview';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyReview = () => {
    const axiosSecure = useAxiosSecure();
    const { user, setRating } = useContext(AuthContext);
    const [myReview, setMyReview] = useState([])
    const [updateData, setUpdateData] = useState([])
    const [filteredService, setFilteredService] = useState([])

    useEffect(() => {
        axiosSecure.get(`/myreview?email=${user.email}`, { withCredentials: true })
            .then(res => {
                ;
                setMyReview(res.data);
                setFilteredService(res.data);
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [user?.email])

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myreview/delete?id=${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your post has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        toast.error(err.code);
                    })

                const remaining = filteredService.filter(data => data._id !== id)
                setFilteredService(remaining);
            }
        });
    }

    const handleUpdate = id => {
        document.getElementById('my_modal_2').showModal();

        axiosSecure.get(`/review?id=${id}`)
            .then(res => {
                setUpdateData(res.data);
                setRating(res.data.rating);
            })
            .catch(err => {
                toast.error(err.code);
            })
    }


    useEffect(() => {
        document.title = "FamView - My Review";
    }, [])
    return (
        <div className='max-w-[1280px] mx-auto px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20 min-h-screen'>
            <div>
                <h1 className='text-center text-2xl lg:text-4xl font-semibold text-neutral'>My Reviews</h1>
            </div>
            <div className='rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5'>
                {
                    filteredService.map(review =>

                        <motion.div key={review._id} whileHover={{ scale: 1.02, transition: { duration: 0.3 } }} className="flex flex-col justify-between items-start gap-5 p-5 bg-base-100 rounded-sm border-2 border-accent w-full">
                            <div className=''>
                                <img className='rounded-full w-20'
                                    src={review.photo}
                                    alt="profile" />
                            </div>
                            <div className="flex flex-col gap-5 ">
                                <div className='flex-1'>
                                    <h1 className='text-xl font-medium text-neutral'>{review.name}</h1>
                                    <p className=''><span className='font-medium text-neutral'>Service Title :</span> {review.service_title}</p>
                                    <div className='flex items-center justify-start gap-2'>
                                        <p className='font-medium text-neutral'>Rating : {review.rating}/10</p>
                                        <p className='flex items-center justify-center text-yellow-400'><IoStar /><IoStar /><IoStar /><IoStar /> <IoStarHalf /></p>
                                    </div>
                                    <p className=''><span className='font-medium text-neutral'>Review :</span> {review.review}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <button onClick={() => handleUpdate(review._id)} className="btn btn-ghost btn-sm bg-customGreen hover:bg-customBlue text-white">Edit</button>
                                    <button onClick={() => handleDelete(review?._id)} className="btn btn-ghost btn-sm bg-customGreen hover:bg-customBlue text-white">Delete</button>
                                </div>
                            </div>

                        </motion.div>)

                }
            </div>
            {/* modal */}
            <dialog id="my_modal_2" className="modal">
                <div className="">
                    <UpdateReview data={updateData}></UpdateReview>
                </div>
            </dialog>
            {/* modal */}
        </div>
    );
};

export default MyReview;