import { ArrowRightIcon, StarIcon, } from '@heroicons/react/24/solid';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
const SingleToy = ({ toy }) => {
    const { _id, name, image, price, rating } = toy;
    return (
        <div className='flex gap-3 p-4 md:px-5 md:py-8 shadow-xl rounded-xl '>
            <img src={image} alt="" className='w-1/2 rounded-md' />
            <div className='flex flex-col justify-between w-full px-4'>
                <div>
                    <h2 className='text-lg font-semibold'>{name}</h2>
                    <p className='text-gray-600'>Price : ${price}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <Rating
                    className='text-orange-500'
                        stop={Math.round(rating)}
                        emptySymbol={<StarIcon className='h-4 w-4'/>}
                        fullSymbol={<StarIcon className='h-4 w-4'/>}
                        fractions={2}
                    />
                    <Link to={`/details/${_id}`} className='text-black hover:text-orange-500 duration-300'><ArrowRightIcon className=' h-6 w-6' /></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;