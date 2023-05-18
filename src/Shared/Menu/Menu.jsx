import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const menuItems = <>
        <Link className='px-4 py-2 bg-gray-100 rounded-md ' to={'/'}>Home</Link>
        <Link className='px-4 py-2 bg-gray-100 rounded-md ' to={'/all-toys'}>All Toys</Link>
        <Link className='px-4 py-2 bg-gray-100 rounded-md ' to={'/blogs'}>Blogs</Link>
    </>
    return (
        <div className="navbar bg-gray-200 text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h2 className='text-2xl'>Jungle Toys</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4   ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                true ? <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                : <UserCircleIcon className='h-full w-full'/>
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li><a>Name</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;