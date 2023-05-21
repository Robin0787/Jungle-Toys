import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const OurCollection = () => {
    return (
       <section className='my-10'>
        <h2 className='text-3xl text-black text-center mb-10'>Our Collection</h2>
         <article className='bg-gray-100 p-5 md:p-10 rounded-md'>
        <div className="md:flex justify-between items-center gap-5 space-y-8">
            <div className='space-y-5 md:w-1/2'>
                <h2 className="text-4xl font-bold text-orange-500">Explore Our Enchanting Toy Collection</h2>
                <p className="text-md w-[90%] text-justify text-gray-500">Explore a carefully curated selection of delightful toys that inspire imagination, spark creativity, and bring endless joy to kids. From educational toys to interactive games, find perfect playtime companions for your little ones. Dive into the magic of childhood and let the adventure begin!</p>
            </div>
        <Carousel className='md:w-1/2 text-center rounded-md'>
            <div>
                <img className='rounded-md' src="https://img.freepik.com/free-vector/shelf-box-full-toys-white_1308-41753.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" />
            </div>
            <div>
                <img className='rounded-md' src="https://img.freepik.com/free-vector/set-different-types-toys_1308-487.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" />
            </div>
            <div>
                <img className='rounded-md' src="https://img.freepik.com/free-vector/set-children-toy_1308-26740.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" />
            </div>
            <div>
                <img className='rounded-md' src="https://img.freepik.com/free-vector/set-children-toys_1308-25689.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" />
            </div>
        </Carousel>
        </div>
         </article>
       </section>
    );
};

export default OurCollection;