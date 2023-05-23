import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useLocation } from 'react-router-dom';
import Toy from './Toy/Toy';

const AllToys = () => {
    const toys = useLoaderData();
    const [allToys, setAllToys] = useState(toys);
    const [name, setName] = useState('');
    const location = useLocation();

    // listen and store the input for search
    function handleToyName(e) {
        setName(e.target.value);
    }
    function handleToySearch(e) {
        e.preventDefault();
        if(name.length > 0) {
            fetch(`https://jungle-toys-server.vercel.app/toy-search-by-name/${name}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setAllToys(data);
                } else {
                    toast.error('No toys found');
                    setAllToys([]);
                }
            })
        }else {
            toast.error('Write name first');
        }
    }
    // For changing the websites title base on route;
    useEffect(() => {
        document.title = `Jungle Toys | ${location?.pathname.slice(1)}`;
    }, [location]);

    return (
        <section className='space-y-8 my-5'>
            <article className='text-center mt-10 md:mt-5'>
                <form onSubmit={handleToySearch}>
                    <input onChange={handleToyName} value={name} type="text" name="name" className='rounded-s-full bg-white text-black border-2 border-gray-200 border-e-0 focus:outline-none px-4 py-2 ' />
                    <button type='submit' className='rounded-e-full border-2 border-s-0 border-gray-200 px-4 py-2 bg-orange-500 text-white'>Search</button>
                </form>
            </article>
            <article className='space-y-5'>
                {(allToys.length > 0) ?
                    allToys.map(toy => <Toy key={toy._id} toy={toy} />)
                    :
                    <h2 className='text-center text-2xl text-red-400 mt-14'>No Data Found!!</h2>
                }
            </article>

        </section>
    );
};

export default AllToys;