import Lottie from "lottie-react";
import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotFoundAnimation from "../../assets/PageNotFound.json";
const NotFound = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 h-[70vh] mt-20 p-5'>
            <Lottie animationData={NotFoundAnimation} loop className="md:h-3/4"/>
            <Link className="flex text-sm gap-1 items-center text-black hover:text-blue-500 duration-300"><FaArrowLeft className="h-4 w-4"/> Back To Home</Link>
        </div>
    );
};

export default NotFound;