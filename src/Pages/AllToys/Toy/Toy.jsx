import { StarIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
    const { name, price, quantity, rating, _id, image } = toy;
    return (
        <article className='md:flex justify-between items-center border border-gray-200 rounded-md p-5 gap-5 space-y-2 text-left'>
            <img src={image} alt="" className='rounded md:h-20 md:w-36' />
            <div className='space-y-1 text-gray-800 flex md:block justify-between'>
                <h2 className="text-lg">{name}</h2>
                <p className="tex-md">${price}</p>
            </div>
            <div className='space-y-1 flex md:block justify-between'>
            <p className="text-lg text-gray-700">Seller: {toy['seller-name']}</p>
                <p className="text-md text-gray-600">{toy['sub-category']}</p>
                
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
            <div className='flex md:justify-center items-center'>
                <Link to={`/details/${_id}`} className='px-2 py-1 text-xs md:text-md md:py-2 md:px-4 border border-orange-400 rounded-full text-white bg-orange-500 hover:shadow-md duration-500 w-full text-center'>Details</Link>
            </div>
        </article>
    );
};

export default Toy;