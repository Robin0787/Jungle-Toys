import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Toy from './Toy/Toy';

const AllToys = () => {
    const toys = useLoaderData();
    const [name, setName] = useState('');

    function handleToyName (e) {
        setName(e.target.value);
    }
    function handleToySearch(e) {
        toast.success(name);
    }
    return (
        <section className='space-y-8 my-5'>
            <article className='text-center'>
                <input onChange={handleToyName} value={name} type="text" name="name" className='rounded-s-full bg-white text-black border-2 border-gray-200 border-e-0 focus:outline-none px-4 py-2 ' />
                <button onClick={handleToySearch} className='rounded-e-full border-2 border-s-0 border-gray-200 px-4 py-2 bg-orange-500 text-white'>Search</button>
            </article>
            <article className='space-y-5'>
                {
                toys.map(toy => <Toy key={toy._id} toy={toy} />)
            }
            </article>
            
        </section>
    );
};

export default AllToys;