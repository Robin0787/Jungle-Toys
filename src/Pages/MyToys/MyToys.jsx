import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../Shared/Loading/LoadingSpinner';
import { authContext } from '../AuthProvider/AuthProvider';
import MyToy from './MyToy/MyToy';

const MyToys = () => {
    const { user } = useContext(authContext);
    const [myToys, setMyToys] = useState([]);
    const location = useLocation();
    useEffect(() => {
        fetch(`https://jungle-toys-server.vercel.app/my-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, []);

    function deleteToy(id) {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://jungle-toys-server.vercel.app/delete-toy/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(toy => toy._id !== id);
                            setMyToys(remaining);
                            toast.success('Toy Deleted');
                        }
                    })
            }
        })
    }

    function sortAscending() {
        fetch(`https://jungle-toys-server.vercel.app/sort-ascending?email=${user.email}`)
        .then(res => res.json())
        .then(data => {setMyToys(data)});
    }
    function sortDescending() {
        fetch(`https://jungle-toys-server.vercel.app/sort-descending?email=${user.email}`)
        .then(res => res.json())
        .then(data => {setMyToys(data)});
    }

    useEffect(() => {
        document.title = `Jungle Toys | ${location?.pathname.slice(1)}`;
    }, [location])

    return (
        <article className='space-y-5 my-5 md:my-10'>
            <div className='flex justify-start items-center  rounded'>
                <button onClick={sortAscending} className='px-5 py-2 text-md text-black focus:bg-orange-500 focus:text-white border border-e-0 border-gray-200'>Lowest</button>
                <button onClick={sortDescending} className='px-5 py-2 text-md text-black focus:bg-orange-500 focus:text-white border border-s-0  border-gray-200'>Highest</button>
            </div>
            <div className='space-y-5 '>
                {   
                    myToys ?
                    myToys.map(toy => <MyToy key={toy._id} toy={toy} deleteToy={deleteToy} />)
                    :
                    <LoadingSpinner />
                }
            </div>
        </article>
    );
};

export default MyToys;