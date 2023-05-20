import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { FaArrowRight, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const MyToy = ({ toy, deleteToy }) => {
    const { name, price, quantity, rating, _id, image, sellerName, subCategory } = toy;
    console.log(toy);
    
    return (
        <article className='md:flex justify-between items-center border border-gray-200 rounded-md p-5 gap-5 space-y-2 text-left'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
                <button onClick={() => {deleteToy(_id)}} className='rounded-full hidden md:block bg-red-500 hover:bg-white text-white hover:text-red-500 p-2 hover:ring ring-red-500 duration-300'><FaRegTrashAlt className='h-4 w-4' /></button>
                <img src={image} alt="" className='rounded md:h-20 md:w-36' />
            </div>
            <div className='space-y-1 text-gray-800 flex md:block justify-between'>
                <h2 className="text-lg">{name}</h2>
                <p className="tex-md">${price}</p>
            </div>
            <div className='space-y-1 flex md:block justify-between'>
                <p className="text-lg text-gray-700">Seller: {sellerName}</p>
                <p className="text-md text-gray-600">{subCategory}</p>

            </div>
            <div className='space-y-1 flex md:block justify-between'>
                <p className="text-md text-gray-600">Available : {quantity} pieces</p>
                <Rating
                    className='text-orange-500'
                    stop={Math.round(rating)}
                    emptySymbol={<StarIcon className='h-4 w-4' />}
                    fullSymbol={<StarIcon className='h-4 w-4' />}
                    fractions={2}
                />
            </div>
            <div className='flex justify-between md:flex-col md:justify-center items-center gap-2'>
                <button onClick={() => {deleteToy(_id)}} className='rounded-full md:hidden bg-red-500 hover:bg-white text-white hover:text-red-500 p-2 hover:ring ring-red-500 duration-300'><FaRegTrashAlt className='h-4 w-4' /></button>
                <Link to={`/update-toy/${_id}`} className='rounded-full bg-green-500 hover:bg-white text-white hover:text-green-500 p-2 hover:ring ring-green-500 duration-300'><FaRegEdit className='h-4 w-4' /></Link>
                <Link to={`/details/${_id}`} className='rounded-full bg-orange-600 hover:bg-white text-white hover:text-orange-600 p-2 hover:ring-2 ring-orange-600 duration-300'><FaArrowRight className='h-4 w-4' /></Link>
            </div>
        </article>
    );
};

export default MyToy;