import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import loginAnimation from "../../assets/loginAnimation.json";
import { authContext } from "../AuthProvider/AuthProvider";

const SignUp = () => {
    const [showEye, setShowEye] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [passError, setPassError] = useState('');
    const [isPassOk, setIsPassOk] = useState(false);
    const { continueWithGoogle, continueWithGithub, signUpWithEmailAndPass } = useContext(authContext);

    function handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if (isPassOk) {
            signUpWithEmailAndPass(email, password)
                .then(res => {
                    toast.success('Sign Up Successful');
                    updateProfile(res.user, { displayName: name, photoURL: photo })
                    form.reset();
                    setShowEye(false);
                })
                .catch(err => {
                    toast.error('Something wrong! Check console');
                    console.log(err.message);
                })
        }
        else {
            toast.error('Password is not valid');
        }
    }
    function handleGithubLogin() {
        continueWithGithub()
            .then(res => {
                toast.success('SignUp Successful');
            })
            .catch(err => {
                toast.error('Something wrong! check Console');
                console.log(err.message);
            })
    }
    function handleGoogleLogin() {
        continueWithGoogle()
            .then(res => {
                toast.success('SignUp Successful');
            })
            .catch(err => {
                toast.error('Something wrong! check Console');
                console.log(err.message);
            })

    }
    function handlePassChange(e) {
        const pass = e.target.value;
        if (!/(?=.*[A-Z])/.test(pass)) {
            setPassError('Password must contain a uppercase letter');
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(pass)) {
            setPassError('Password must contain at least two numbers');
        }
        else if (!/(?=.*[!@#$%^&*+=])/.test(pass)) {
            setPassError('Password must contain a special character');
        }
        else if (pass.length < 6) {
            setPassError('Password must contain minimum six characters');
        }
        else {
            setIsPassOk(true);
            setPassError('');
        }
        validatePass(pass);
    }
    function validatePass(pass) {
        if (pass.length > 0) {
            setShowEye(true);
        } else {
            setShowEye(false);
            setPassError('');
        }
    }

    return (
        <section className="my-5">
            <article className='flex flex-col md:flex-row gap-5 justify-center items-center'>
                <div className='md:w-1/2 lg:w-2/5 flex justify-center items-center'>
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 my-auto px-0 lg:px-4'>
                    <form onSubmit={handleLogin} className='shadow-lg text-left rounded-md py-3 px-6 lg:px-14 space-y-3 w-full'>
                        <h2 className="text-2xl text-gray-700 text-center font-semibold rounded-md my-5">SignUp</h2>
                        <div className='space-y-2'>
                            <label htmlFor="name" className='text-sm text-gray-600'>Name</label><br />
                            <input type="text" name='name' placeholder='Your name' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='text-sm text-gray-600'>Email</label><br />
                            <input type="email" name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className='text-sm text-gray-600'>Password</label><br />
                            <div className='space-y-2'>
                                <div className='relative mb-6'>
                                    <input onChange={handlePassChange} type={showPass ? 'text' : "password"} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                                    {showEye && <p onClick={() => { setShowPass(!showPass) }} className='absolute right-2 top-[5px] cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
                                        {
                                            showPass ?
                                                <FaEye className='text-blue-400 h-4 w-4' />
                                                :
                                                <FaEyeSlash className='text-blue-400 h-4 w-4' />
                                        }
                                    </p>}
                                    <p className="text-xs text-red-500 absolute -bottom-5 left-1">{passError}</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="photo" className='text-sm text-gray-600'>Photo URL</label><br />
                            <input type="url" name='photo' placeholder='Photo URL' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                        </div>
                        <div>
                            <button type='submit' className='w-full py-3 bg-[#ff3811] text-white font-semibold cursor-pointer rounded-md hover:bg-[#ff0000] duration-500'>Sign Up</button>
                        </div>
                        <div className='flex w-full items-center'>
                            <hr className='w-1/3' />
                            <p className='text-center text-xs text-gray-500 px-2'>Or Continue with</p>
                            <hr className='w-1/3' />
                        </div>
                        <div className='flex items-center justify-center gap-4'>
                            <p onClick={handleGithubLogin} className='bg-gray-100 hover:bg-gray-200 duration-300 p-3 cursor-pointer rounded-full text-gray-800'><FaGithub className='h-5 w-5 hover:scale-110 duration-500' /></p>
                            <p onClick={handleGoogleLogin} className='bg-gray-100 hover:bg-gray-200 duration-300 p-3 cursor-pointer rounded-full text-blue-500'><FaGoogle className='h-5 w-5 hover:scale-110 duration-500' /></p>
                        </div>
                        <div>
                            <p className="text-sm text-center text-gray-600">Already have an account? <Link to={'/login'} className='text-[#FF3811]'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default SignUp;