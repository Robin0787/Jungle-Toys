import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Shared/Menu/Menu';

const Main = () => {
    return (
        <div className='text-center'>
            <Menu />
            <Outlet />
        </div>
    );
};

export default Main;