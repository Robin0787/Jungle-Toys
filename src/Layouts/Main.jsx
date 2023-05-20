import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Menu from '../Shared/Menu/Menu';

const Main = () => {
    return (
        <div className='font-thin overflow-hidden'>
            <article className='w-[90%] mx-auto'>
            <Menu />
            <Outlet />
            </article>
            <Footer />
            <Toaster />
        </div>
    );
};

export default Main;