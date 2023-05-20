import Lottie from "lottie-react";
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from "../../assets/loginAnimation.json";
import { authContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const [showEye, setShowEye] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const {logInWithEmailAndPass, continueWithGoogle, continueWithGithub, passReset} = useContext(authContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const from  = location.state?.from?.pathname || '/';

    function handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmailAndPass(email, password)
        .then(res => {
            toast.success('Login Successful');
            form.reset();
            setShowEye(false);
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error(err.message.slice(22, -2).replace(/-/g, ' '));
        })
    }
    function handleGoogleLogin() {
        continueWithGoogle()
        .then(res => {
            toast.success('SignUp Successful');
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error('Something wrong! check Console');
            console.log(err.message);
        })
    }
    function handleGithubLogin() {
        continueWithGithub()
        .then(res => {
            toast.success('SignUp Successful');
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error('Something wrong! check Console');
            console.log(err.message);
        })
    }
    function handlePassChange(e) {
        const pass = e.target.value;
        if(pass.length > 0) {
            setShowEye(true);
        }else {
            setShowEye(false);
        }
    }
    function handleResetPass() {
        const email = emailRef.current.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            passReset(email)
            .then(() => {
                toast.success('Reset Email Sent');
            })
            .catch(err => {
                toast.error(err.message.slice(22, -2).replace(/-/g, ' '));
            })
        }
        else if (email.length < 1) {
            toast.error('Write your email first');
            emailRef.current.focus();
        }
        else {
            toast.error("Invalid Email");
        }
    }

    return (
        <section className='my-8'>
            <article className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='md:w-1/2 lg:w-2/5 flex justify-center items-center'>
                    <Lottie animationData={loginAnimation} loop={true} />
                </div>
                <div className='w-full md:w-1/2 lg:w-2/5 my-auto px-0 lg:px-4'>
                    <form onSubmit={handleLogin} className='shadow-lg text-left rounded-md py-5 px-6 lg:px-14 space-y-5 w-full'>
                        <h2 className="text-2xl text-gray-700 text-center font-semibold rounded-md my-5">Login</h2>
                        <div className='space-y-2'>
                            <label htmlFor="email" className='text-sm text-gray-600'>Email</label><br />
                            <input type="email" ref={emailRef} name='email' placeholder='Your email' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                        </div>
                        <div className='space-y-2'>
                            <label htmlFor="password" className='text-sm text-gray-600'>Password</label><br />
                            <div className='space-y-1'>
                                <div className='relative'>
                                    <input onChange={handlePassChange} type={showPass ? 'text' : "password"} name='password' placeholder='Your password' className='p-2 w-full border focus:ring duration-500 ring-gray-300 bg-white focus:outline-0 rounded-md placeholder:text-xs' required />
                                    {showEye && <p onClick={() => { setShowPass(!showPass) }} className='absolute right-2 top-[5px] cursor-pointer p-2 hover:bg-gray-100 rounded-full'>
                                        {
                                            showPass ?
                                                <FaEye className='text-blue-400 h-4 w-4' />
                                                :
                                                <FaEyeSlash className='text-blue-400 h-4 w-4' />
                                        }
                                    </p>}
                                </div>
                                <p className='text-xs text-gray-500'>forgot password? <span className='text-[#ff3811] cursor-pointer' onClick={handleResetPass}>reset</span></p>
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='w-full py-3 bg-[#ff3811] text-white font-semibold cursor-pointer rounded-md hover:bg-[#ff0000] duration-500'>Login</button>
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
                            <p className="text-sm text-center text-gray-600">Don't have an account? <Link to={'/signUp'} className='text-[#FF3811]'>SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </article>
        </section>
    );
};

export default Login;