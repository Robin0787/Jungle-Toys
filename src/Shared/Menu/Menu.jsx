import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { authContext } from '../../Pages/AuthProvider/AuthProvider';
import logo from "../../assets/logo.png";

const Menu = () => {
    const {user, logOut} = useContext(authContext);
    const menuItems = <>
        <NavLink className={({isActive}) => isActive ? 'px-4 py-2 bg-gray-100 duration-300 rounded-md text-black' : "px-4 py-2 hover:bg-gray-100 duration-300 rounded-md"} to={'/'}>Home</NavLink>        
        <NavLink className={({isActive}) => isActive ? 'px-4 py-2 bg-gray-100 duration-300 rounded-md text-black' : "px-4 py-2 hover:bg-gray-100 duration-300 rounded-md"} to={'/all-toys'}>All Toys</NavLink>        
        <NavLink className={({isActive}) => isActive ? 'px-4 py-2 bg-gray-100 duration-300 rounded-md text-black' : "px-4 py-2 hover:bg-gray-100 duration-300 rounded-md"} to={'/my-toys'}>My Toys</NavLink>        
        <NavLink className={({isActive}) => isActive ? 'px-4 py-2 bg-gray-100 duration-300 rounded-md text-black' : "px-4 py-2 hover:bg-gray-100 duration-300 rounded-md"} to={'/add-toys'}>Add A Toy</NavLink>        
        <NavLink className={({isActive}) => isActive ? 'px-4 py-2 bg-gray-100 duration-300 rounded-md text-black' : "px-4 py-2 hover:bg-gray-100 duration-300 rounded-md"} to={'/blogs'}>Blogs</NavLink>        
    </>

    return (
        <div className="navbar bg-white rounded-b-md text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 gap-4  text-gray-500">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className='flex justify-center items-center gap-2'>
                <img src={logo} className='h-16' alt="" />
                <h2 className="text-2xl">Jungle Toys</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4  text-gray-500">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user.photoURL} data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName}/>
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        <li onClick={logOut}><a>Logout</a></li>
                    </ul>
                </div>
                : 
                <Link to={'/login'} className='bg-orange-500 text-white px-5 py-1 rounded-sm'>Login</Link>
                }
            </div>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Menu;