import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img2 from "../../../assets/Banner/img1.avif";
import img1 from "../../../assets/Banner/img2.avif";
import img3 from "../../../assets/Banner/img3.avif";


const Banner = () => {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    return (
        <section className='md:flex mt-6 mb-20'>
            <article className='md:w-1/2 flex justify-center items-center'>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-left" className='text-left space-y-4 px-6 mt-10'>
                    <h2 className="text-3xl lg:text-5xl text-black font-semibold leading-normal">Welcome to <br className='lg:hidden' /> <span className='font-thin'>Jungle Toys <br className='lg:hidden' /></span> <br className='hidden lg:inline' /> Where Adventure Begins!</h2>
                    <p className="text-md text-justify text-gray-500 mb-5">Step into a world of adventure and imagination with our captivating collection of animal-inspired toys. Unleash the wild side of play and create unforgettable memories with Toys 'n Tails!</p>
                    <button>
                        <Link to={'/all-toys'} className='text-black bg-gray-200 hover:bg-gray-300 duration-300  rounded-md px-4 py-2 hover:shadow-lg'>Show Toys</Link>
                    </button>
                </div>
            </article>
            <article className='md:w-1/2'>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center" className='relative flex justify-center'>
                    <img  src={img1} alt="" className='rounded-md' />
                    <div className='absolute top-3/4 right-4 flex items-center gap-4 px-2'>
                        <img
                            src={img2} alt="" className='w-1/2 border-8 rounded-md border-gray-300' />
                        <img src={img3} alt="" className='w-1/2  border-8 rounded-md border-gray-300' />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Banner;