import React, { useContext } from 'react';
import RateComponent from '../Pages/RateComponent';
import { ImCross } from 'react-icons/im';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const UpdateReview = ({ data }) => {
    const { rating } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const review = form.review.value;
        const update = { review, rating }

        axiosSecure.put(`/myreview/update?id=${data._id}`,update)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    document.getElementById('my_modal_2').close();
                }
            })
            .catch(err => {
                toast.error(err);
            })
    }

    const handleModal = () => {
        document.getElementById('my_modal_2').close();
    }
    return (
        <div className='bg-customBlue p-10 max-w-4xl rounded-sm'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold text-white'>Update Review</h1>
                <button onClick={handleModal}><ImCross className='text-red-600' /></button>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#FFFFFF99]">Service Title</span>
                    </label>
                    <input type="text" readOnly value={data.service_title} placeholder="title" name='title' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className=" text-[#FFFFFF99]">Give Rating</span>
                    </label>
                    <RateComponent></RateComponent>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#FFFFFF99]">Write Something</span>
                    </label>
                    <textarea name='review'
                        defaultValue={data.review}
                        placeholder="review"
                        className="textarea textarea-bordered textarea-md w-full" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-outline rounded-sm bg-customGreen border-none text-white">Update Review</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;