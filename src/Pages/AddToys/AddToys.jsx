import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import React, { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

const AddToys = () => {
    const {user} = useContext(authContext);
    const location = useLocation();
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const sellerName  = form.sellerName.value;
        const sellerEmail  = form.sellerEmail.value;
        const subCategory = form.subCategory.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const image = form.photo.value;
        const toyInfo = { name, price, sellerName, sellerEmail, subCategory, rating, quantity, details, image };
        fetch('https://jungle-toys-server.vercel.app/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                toast.success('Toy Added');
                form.reset();
            }else {
                toast.error('Something wrong!!');
            }
        })
    }
    // For changing website title based on route;
    useEffect(() => {
        document.title = `Jungle Toys | ${location?.pathname.slice(1)}`;
    }, [location])
    return (
        <article className='lg:w-[80%] mx-auto my-5'>
                <Link to={'/'} className='text-md text-black hover:text-orange-400 duration-300 font-semibold flex items-center gap-1 mb-5'><ArrowLeftIcon className='w-5 h-5' /> Back To Home</Link>
                <div className='p-10 bg-[#F4F3F0] rounded-lg'>
                    <h2 className='text-3xl font-semibold text-center my-6 text-[#331A15]'>Add A Toy</h2>
                    <p className='text-sm text-justify md:text-center md:w-[70%] mx-auto text-gray-500 mb-6'>Step into a world of adventure and imagination with our captivating collection of animal-inspired toys. Unleash the wild side of play and create unforgettable memories with Toys 'n Tails!</p>
                    <form onSubmit={handleSubmit}>
                        <div className='md:flex gap-10 my-5 text-gray-700'>
                            <div className='md:w-1/2 space-y-5'>
                                <div className='space-y-3'>
                                    <label htmlFor="name" className='text-md font-semibold text-gray-600'>Toy Name</label><br />
                                    <input type="text" name='name' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Toy Name'  required /><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="sellerName" className='text-md font-semibold text-gray-600'>Seller Name</label><br />
                                    <input type="text" name='sellerName' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Seller Name' defaultValue={user.displayName} required /><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="subCategory" className='text-md font-semibold text-gray-600'>Sub-Category</label><br />
                                    <input type="text" name='subCategory' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Sub-Category' required /><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="photo" className='text-md font-semibold text-gray-600'>Photo</label><br />
                                    <input type="url" name='photo' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Photo URL' required /><br />
                                </div>
                            </div>
                            <div className='md:w-1/2 space-y-5'>
                                <div className='space-y-3'>
                                    <label htmlFor="Price" className='text-md font-semibold text-gray-600'>Price</label><br />
                                    <input type="number" name='price' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Price' required /><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="sellerEmail" className='text-md font-semibold text-gray-600'>Seller Email</label><br />
                                    <input type="email" name='sellerEmail' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Seller Email' defaultValue={user.email} required /><br />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="rating" className='text-md font-semibold text-gray-600'>Rating</label><br />
                                    <input type="number" name='rating' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Rating' required /><br />
                                </div>
                                <div className='space-y-3'>
                                    <label htmlFor="quantity" className='text-md font-semibold text-gray-600'>Available Quantity</label><br />
                                    <input type="number" name='quantity' className='w-full p-3 bg-white rounded-md focus:outline-0 focus:ring-4 ring-gray-200 duration-300' placeholder='Enter Quantity' required /><br />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3 mb-5">
                            <label htmlFor="Name" className='text-md font-semibold text-gray-600'>Toy Details</label><br />
                            <textarea name="details" className='w-full bg-white text-gray-700 rounded-md p-3 focus:outline-0 focus:ring-4 ring-gray-200 duration-300' cols="30" rows="5" placeholder='Enter Details' required>
                            </textarea>
                        </div>
                        <div>
                            <div className='flex justify-center'>
                                <button type='submit' className='text-md py-3 border border-gray-100 hover:border-gray-300 rounded-md bg-none bg-orange-400 hover:bg-orange-500 text-white duration-300 w-full'>Add
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
        </article>
    );
};

export default AddToys;