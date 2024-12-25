import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditService = () => {
    const [data, setData] = useState([])
    const [category, setCategory] = useState(null);
    console.log(category);

    const { id } = useParams()
    console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:5000/service/details/${id}`)
            .then(res => {
                console.log(res.data);
                setData(res.data);
                setCategory(res.data.category);
            })
            .catch(err => {
                toast.error(err.code);
            })
    }, [id])

    const handleChange = e => {
        setCategory(e.target.value);
    }

    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const website = form.website.value;
        const companyName = form.company.value;
        const price = parseInt(form.price.value);
        const description = form.description.value;
        const update = { title, image, website, companyName, price, description, category }

        console.log(update);

        axios.put(`http://localhost:5000/myservice/update?id=${data._id}`, update)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                toast.error(err.code);
            })
    }

    return (
        <div className='py-8 md:py-14 px-4 md:px-8 bg-green-100'>
            <div className='bg-customBlue w-full max-w-4xl shrink-0 shadow-2xl rounded-sm p-10 mx-auto'>
                <h1 className="text-3xl text-center font-semibold mb-4 text-white">Edit your Service</h1>
                <form onSubmit={handleUpdate} >

                    <div className='grid lg:grid-cols-2 lg:gap-10'>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Service Title</span>
                                </label>
                                <input type="text" defaultValue={data.title} placeholder="title" name='title' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Service Image</span>
                                </label>
                                <input type="url" defaultValue={data.image} placeholder="image" name='image' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Company Website</span>
                                </label>
                                <input type="url" defaultValue={data.website} placeholder="url" name='website' className="input input-bordered" required />
                            </div>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Company Name</span>
                                </label>
                                <input type="text" defaultValue={data.companyName} placeholder="company" name='company' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Price</span>
                                </label>
                                <input type="text" defaultValue={data.price} placeholder="price" name='price' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-[#FFFFFF99]">Categoy</span>
                                </label>
                                <select value={category} onChange={handleChange} name="category" className="select select-bordered w-full">
                                    <option disabled>Select a Category</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Clothings">Clothings</option>
                                    <option value="Beauty">Beauty</option>
                                    <option value="Bars">Bars</option>
                                    <option value="Hospital">Hospital</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#FFFFFF99]">Description</span>
                        </label>
                        <textarea name='description'
                            defaultValue={data.description}
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

export default EditService;