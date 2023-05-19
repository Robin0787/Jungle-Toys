import { ArrowLeftIcon, StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Rating from 'react-rating';
import { Link, useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const { name, price, rating, image, details, quantity } = toy;
    return (
        <section className='md:flex gap-5 mt-10 md:mt-20'>
            <article className='shadow-lg p-5 space-y-4'>
                <img src={image} alt="" className='rounded mx-auto ' />
                <div className='md:flex justify-between items-center font-semibold text-gray-600'>
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
            <article className='shadow-lg text-left p-5 space-y-4 text-gray-600'>
                <h2 className="text-2xl  font-semibold">{name}</h2>
                <p className="tex-md text-gray-400">{details}</p>
                <div className=' text-gray-500'>
                <p className="tex-md">{toy['seller-name']}</p>
                <p className="tex-md">{toy['seller-email']}</p>
                </div>
               <div className='flex justify-between items-center'>
               <p className="tex-md">Available : {quantity} pieces</p>
               <Link to={'/'} className='text-black hover:text-orange-500 duration-300 flex justify-between items-center gap-2'><ArrowLeftIcon className='h-5 w-5'/>Back to Home</Link>
               </div>
            </article>
        </section>
    );
};

export default ToyDetails;