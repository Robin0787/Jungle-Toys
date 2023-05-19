import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
        </div>
    );
};

export default Home;