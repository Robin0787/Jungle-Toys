import React, { useContext, useEffect, useState } from 'react';
import LoadingSpinner from '../../Shared/Loading/LoadingSpinner';
import { authContext } from '../AuthProvider/AuthProvider';
import MyToy from './MyToy/MyToy';

const MyToys = () => {
    const { user } = useContext(authContext);
    const [myToys, setMyToys] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:2000/my-toys?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, []);
    console.log(myToys);
    return (
        <article className='space-y-5 my-5 md:my-10'>
            {   myToys ?
                myToys.map(toy => <MyToy key={toy._id} toy={toy} />)
                :
                <LoadingSpinner />
            }
        </article>
    );
};

export default MyToys;