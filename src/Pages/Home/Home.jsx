import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import CarouselBanner from './Carousel/Carousel';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
            <CarouselBanner />
        </div>
    );
};

export default Home;