import React from 'react';
import { Link } from 'react-router-dom';
import img2 from "../../../assets/Banner/img1.avif";
import img1 from "../../../assets/Banner/img2.avif";
import img3 from "../../../assets/Banner/img3.avif";

const Banner = () => {
    return (
        <section className='md:flex mt-6 mb-20'>
                <article className='md:w-1/2 flex justify-center items-center'> 
                    <div className='text-left space-y-4 px-6 mt-10'>
                        <h2 className="text-3xl lg:text-5xl text-black font-semibold leading-normal">Welcome to <br className='lg:hidden'/> <span className='font-thin'>Jungle Toys <br className='lg:hidden'/></span> <br className='hidden lg:inline'/> Where Adventure Begins!</h2>
                        <p className="text-md text-justify text-gray-500 mb-5">Step into a world of adventure and imagination with our captivating collection of animal-inspired toys. Unleash the wild side of play and create unforgettable memories with Toys 'n Tails!</p>
                        <button>
                        <Link to={'/all-toys'}  className='text-black bg-gray-200 hover:bg-gray-300 duration-300  rounded-md px-4 py-2 hover:shadow-lg'>Show Toys</Link>
                        </button>
                    </div>
                </article>
                <article className='md:w-1/2'>
                    <div className='relative flex justify-center'>
                        <img src={img1} alt="" className='rounded-md'/>
                        <div className='absolute top-3/4 right-4 flex items-center gap-4 px-2'>
                        <img src={img2} alt="" className='w-1/2 border-8 rounded-md border-gray-300'/>
                        <img src={img3} alt="" className='w-1/2  border-8 rounded-md border-gray-300'/>
                        </div>
                    </div>
                </article>
        </section>
    );
};

export default Banner;