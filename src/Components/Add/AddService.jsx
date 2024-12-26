import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAdd = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const website = form.website.value;
        const companyName = form.company.value;
        const price = parseInt(form.price.value);
        const email = user?.email;
        const description = form.description.value;
        const date = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
        const category = form.category.value;

        const serviceData = { title, image, website, companyName, price, email, description, date, category }
        console.log(serviceData);
        
        axios.post('http://localhost:5000/addservice', serviceData)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Service added successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    e.target.reset();
                    navigate('/');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
                document.title = "FamView - Add Service";
            }, []);
    return (
        <div className='py-8 md:py-14 px-4 md:px-8 bg-green-100'>
            <div className='bg-customBlue w-full max-w-4xl shrink-0 shadow-2xl rounded-sm p-10 mx-auto'>
                <h1 className="text-3xl text-center font-semibold mb-4 text-white">Post a new Service</h1>
                <form onSubmit={handleAdd}>

                    <div className='grid lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Service Title</span>
                                </label>
                                <input type="text" placeholder="title" name='title' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Service Image</span>
                                </label>
                                <input type="url" placeholder="image" name='image' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Company Website</span>
                                </label>
                                <input type="url" placeholder="url" name='website' className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Company Name</span>
                                </label>
                                <input type="text" placeholder="company" name='company' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Price</span>
                                </label>
                                <input type="text" placeholder="price" name='price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Categoy</span>
                                </label>
                                <select defaultValue='Select a Categoy' name="category" className="select select-bordered w-full">
                                    <option>Technology</option>
                                    <option>Food</option>
                                    <option>Clothings</option>
                                    <option>Beauty</option>
                                    <option>Bars</option>
                                    <option>Hospital</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFFFFF99]">Description</span>
                        </label>
                        <textarea name='description'
                            placeholder="description"
                            className="textarea textarea-bordered textarea-md w-full" required></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline rounded-sm bg-customGreen border-none text-white">Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;