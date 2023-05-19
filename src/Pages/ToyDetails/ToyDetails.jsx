import { ArrowLeftIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Rating from 'react-rating';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const navigate = useNavigate();
    const { name, price, rating, image, details, quantity } = toy;
    return (
        <section className='md:flex gap-5 mt-10 md:mt-20 space-y-5'>
            <article className='shadow-lg p-5 space-y-4'>
                <img src={image} alt="" className='rounded mx-auto ' />
                <div className='flex justify-between items-center font-semibold text-gray-600'>
                    <p className="tex-md">${price}</p>
                    <Rating
                        className='text-orange-500'
                        stop={Math.round(rating)}
                        emptySymbol={<StarIcon className='h-4 w-4' />}
                        fullSymbol={<StarIcon className='h-4 w-4' />}
                        fractions={2}
                    />
                </div>
            </article>
            <article  className='flex flex-col justify-between shadow-lg text-left p-5 text-gray-600 lg:w-3/4'>
                <div className='space-y-4'>
                    <h2 className="text-2xl  font-semibold">{name}</h2>
                    <p className="tex-md text-justify text-gray-400">{details}</p>
                </div>
                <div className=' text-gray-600'>
                    <p className="tex-md">{toy['seller-name']}</p>
                    <p className="tex-md">{toy['seller-email']}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p className="tex-md text-gray-600">Available : {quantity} pieces</p>
                    <button onClick={() => {navigate(-1)}} className='text-black hover:text-orange-500 duration-300 flex justify-between items-center gap-2'><ArrowLeftIcon className='h-5 w-5' />Go Back</button>
                </div>
            </article>
        </section>
    );
};

export default ToyDetails;