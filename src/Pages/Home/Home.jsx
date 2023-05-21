import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import BestSelling from './BestSelling/BestSelling';
import Gallery from './Gallery/Gallery';
import OurCollection from './OurCollection/OurCollection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
            <OurCollection />
            <BestSelling />
        </div>
    );
};

export default Home;