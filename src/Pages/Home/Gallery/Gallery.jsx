import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import img3 from "../../../assets/Gallery/horse.avif";
import { default as img2, default as img4 } from "../../../assets/Gallery/lion2.avif";
import img5 from "../../../assets/Gallery/octopuse.avif";
import { default as img1, default as img6 } from "../../../assets/Gallery/owl.avif";
import img7 from "../../../assets/Gallery/penguin.avif";
import img8 from "../../../assets/Gallery/sharks.avif";


const Gallery = () => {
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
        <section className='mt-52'>
            <article>
                <h2 className='text-center text-3xl text-gray-700 mb-5'>Gallery</h2>
            </article>
            <article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-2 p-5'>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-left" className='relative rounded-md'>
                    <img src={img1} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Owl</p>
                </div>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-right" className='relative rounded-md'>
                    <img src={img2} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Lion</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="left" className='relative rounded-md'>
                    <img src={img3} alt="" />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Horse</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-right" className='relative rounded-md'>
                    <img src={img7} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Penguin</p>
                </div>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center" className='relative rounded-md'>
                    <img src={img5} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Octopus</p>
                </div>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-right" className='relative rounded-md'>
                    <img src={img6} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Owl</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center" className='relative rounded-md'>
                    <img src={img2} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Lion</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-left" className='relative rounded-md'>
                    <img src={img8} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Octopus</p>
                </div>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="bottom-left" className='relative rounded-md'>
                    <img src={img3} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Horse</p>
                </div>
                <div data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center" className='relative rounded-md'>
                    <img src={img4} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Lion</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center" className='relative rounded-md'>
                    <img src={img7} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Penguin</p>
                </div>
                <div data-aos="fade-left"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="center-right" className='relative rounded-md'>
                    <img src={img1} alt="" className='rounded-md ' />
                    <p className='absolute rounded-md top-0 text-white flex justify-center items-end  w-full h-full bg-gray-700 bg-opacity-50 opacity-0 hover:opacity-100 duration-500'>Owl</p>
                </div>
            </article>
        </section>
    );
};

export default Gallery;