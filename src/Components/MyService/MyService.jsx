import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import EditService from './EditService';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyService = () => {
    const [myService, setMyService] = useState([]);
    const [filteredService, setFilteredService] = useState([]);
    const { user } = useContext(AuthContext);
    const [data, setData] = useState([])
    const [category, setCategory] = useState('');
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/myservice?email=${user.email}`, {withCredentials: true})
            .then(res => {
                setMyService(res.data);
                setFilteredService(res.data)
            })
            .catch(err => {
                toast.error(err.code)
            })
    }, [user?.email])

    const handleOnChange = input => {
        const inValue = input.target.value;
        const lowValue = inValue.toLowerCase();
        const filteredData = myService.filter(data => {
            return data.title.toLowerCase().includes(lowValue);
        })
        setFilteredService(filteredData);
    }

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
                axiosSecure.delete(`/myservice/delete?id=${id}`)
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

        axiosSecure.get(`/service/details/${id}`)
            .then(res => {
                setData(res.data);
                setCategory(res.data.category);
            })
            .catch(err => {
                toast.error(err.code);
            })
    }

    useEffect(() => {
        document.title = "FamView - My Service";
    }, []);
    return (
        <div className=' px-4 md:px-12 lg:px-28 py-8 md:py-12 lg:py-20 min-h-screen'>
            <div className='flex flex-col gap-5 lg:flex-row items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold lg:text-4xl text-neutral'>My Services</h1>
                </div>
                <div>
                    <label className="input  input-bordered border-accent flex items-center gap-2">
                        <input onChange={handleOnChange} type="text" className="grow" name='search' placeholder="Search by title" />
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                    </label>
                </div>
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-neutral'>Service</th>
                            <th className='hidden md:inline text-neutral'>Company Name</th>
                            <th className='text-neutral'>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredService.map(service => <tr key={service._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar hidden md:inline">
                                            <div className="mask mask-squircle h-12 w-12 ">
                                                <img
                                                    src={service?.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-neutral">{service?.title}</div>
                                            <div className="text-sm opacity-50">{service?.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className='hidden md:inline '>
                                   <p className='text-neutral'> {service?.companyName}</p>
                                </td>
                                <td className='text-neutral'>{service?.price} BDT</td>
                                <th className='flex flex-col gap-2'>
                                    <button onClick={() => handleUpdate(service._id)} className="btn btn-ghost btn-sm bg-accent w-full hover:bg-customBlue text-white">Edit</button>
                                    <button onClick={() => handleDelete(service?._id)} className="btn btn-ghost btn-sm bg-accent hover:bg-customBlue text-white">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* modal start */}
            <dialog id="my_modal_2" className="modal">
                <div className="">
                    <EditService data={data} category={category} setCategory={setCategory}></EditService>
                </div>
            </dialog>
            {/* modal end */}
        </div>
    );
};

export default MyService;
// <Link to={`/update/${service._id}`}>
