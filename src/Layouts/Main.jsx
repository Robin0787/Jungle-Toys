import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Menu from '../Shared/Menu/Menu';

const Main = () => {
    return (
        <div className='text-center font-thin'>
            <article className='w-[90%] mx-auto'>
            <Menu />
            <Outlet />
            </article>
            <Toaster />
        </div>
    );
};

export default Main;