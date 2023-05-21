import React from 'react';
import Marquee from "react-fast-marquee";
const BestSelling = () => {

    return (
        <section className='my-20'>
            <article>
            <h2 className='text-3xl text-black text-center mb-10'>Best Selling</h2>
            </article>
            <Marquee speed={80} className='flex items-center gap-3 md:gap-5 rounded-md'>
                <div className='mx-3'>
                    <img src="https://img.freepik.com/free-photo/cheerful-snowman-toy-snowy-winter-wonderland-generated-by-ai_188544-11630.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" alt="" className='h-44 rounded-md'/>
                </div>
                <div className='mx-3'>
                    <img src="https://img.freepik.com/free-photo/top-view-cute-plush-toy-with-copy-space_23-2150312285.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" alt="" className='h-44 rounded-md'/>
                </div>
                <div className='mx-3'>
                    <img src="https://img.freepik.com/free-photo/front-view-arrangement-animals-day_23-2149058033.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" alt="" className='h-44 rounded-md'/>
                </div>
                <div className='mx-3'>
                    <img src="https://img.freepik.com/free-photo/closeup-person-feeding-turquoise-fronted-amazon-standing-wooden-fence-sunlight_181624-36198.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.1.1016222735.1684335262&semt=ais" alt="" className='h-44 rounded-md'/>
                </div>
                <div className='mx-3'>
                    <img src="https://img.freepik.com/free-photo/adorable-white-dog-isolated-yellow_23-2148985983.jpg?size=626&ext=jpg&uid=R101316449&ga=GA1.2.1016222735.1684335262&semt=ais" alt="" className='h-44 rounded-md'/>
                </div>
            </Marquee>
        </section>
    );
};

export default BestSelling;