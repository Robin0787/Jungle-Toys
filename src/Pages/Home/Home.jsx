import React from 'react';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import Gallery from './Gallery/Gallery';
import OurCollection from './OurCollection/OurCollection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Gallery />
            <Categories />
            <OurCollection />
        </div>
    );
};

export default Home;