import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateToy = () => {
    const navigate = useNavigate();
    const toy = useLoaderData();
    const { name, price, rating, image, subCategory, details, quantity, sellerName, sellerEmail, _id } = toy;
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const updatedToy = { price, quantity, details };
        fetch(`http://localhost:2000/update-toy/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0) {
                toast.success('Toy Updated');
                navigate('/my-toys');
            }
        })
        
    }
    return (
        <article className='lg:w-[80%] mx-auto my-5'>
                <button onClick={()=>{navigate(-1)}} className='text-md text-black hover:text-orange-400 duration-300 font-semibold flex items-center gap-1 mb-5'><ArrowLeftIcon className='w-5 h-5' />Go Back</button>
                <div className='p-10 bg-[#F4F3F0] rounded-lg'>
                    <h2 className='text-3xl font-semibold text-center my-6 text-[#331A15]'>Update Toy</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10 my-5 text-gray-700'>
                            <div className='md:w-1/2 space-y-5'>
                                <div className='space-y-3'>
                                    <label htmlFor="name" className='text-md font-semibold text-gray-600'>Toy Name</label><br />
                                    <input type="text" name='name' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Toy Name'  required defaultValue={name} readOnly
                                    data-tooltip-id="my-tooltip" data-tooltip-content='read-only'/><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="sellerName" className='text-md font-semibold text-gray-600'>Seller Name</label><br />
                                    <input type="text" name='sellerName' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Seller Name' defaultValue={sellerName} required readOnly data-tooltip-id="my-tooltip" data-tooltip-content='read-only'/><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="subCategory" className='text-md font-semibold text-gray-600'>Sub-Category</label><br />
                                    <input type="text" name='subCategory' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Sub-Category' required readOnly data-tooltip-id="my-tooltip" data-tooltip-content='read-only' defaultValue={subCategory}/><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="photo" className='text-md font-semibold text-gray-600'>Photo</label><br />
                                    <input type="url" name='photo' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Photo URL' required defaultValue={image} readOnly data-tooltip-id="my-tooltip" data-tooltip-content='read-only'/><br />
                                </div>
                            </div>
                            <div className='md:w-1/2 space-y-5'>
                                <div className='space-y-3'>
                                    <label htmlFor="Price" className='text-md font-semibold text-gray-600'>Price</label><br />
                                    <input type="number" name='price' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Price' required defaultValue={price}/><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="sellerEmail" className='text-md font-semibold text-gray-600'>Seller Email</label><br />
                                    <input type="email" name='sellerEmail' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Seller Email' defaultValue={sellerEmail} required readOnly data-tooltip-id="my-tooltip" data-tooltip-content='read-only'/><br />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="rating" className='text-md font-semibold text-gray-600'>Rating</label><br />
                                    <input type="number" name='rating' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Rating' required defaultValue={rating} readOnly data-tooltip-id="my-tooltip" data-tooltip-content='read-only'/><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="quantity" className='text-md font-semibold text-gray-600'>Available Quantity</label><br />
                                    <input type="number" name='quantity' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Quantity' required defaultValue={quantity}/><br />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 mb-5">
                            <label htmlFor="Name" className='text-md font-semibold text-gray-600'>Toy Details</label><br />
                            <textarea name="details" className='w-full bg-white text-gray-700 rounded-md p-3 focus:outline-0 focus:ring-4 ring-gray-200 duration-300' cols="30" rows="5" placeholder='Enter Details' required defaultValue={details}>
                            </textarea>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <button type='submit' className='text-md py-3 border border-gray-100 hover:border-gray-300 rounded-md bg-none bg-orange-400 hover:bg-orange-500 text-white duration-300 w-full'>Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
        </article>
    );
};

export default UpdateToy;