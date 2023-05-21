import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Banner from './Banner/Banner';
import BestSelling from './BestSelling/BestSelling';
import Gallery from './Gallery/Gallery';
import OurCollection from './OurCollection/OurCollection';

const Home = () => {
    const location = useLocation();
    
    useEffect(() => {
        document.title = `Jungle Toys ${location?.pathname.slice(1)}`;
    }, [location])
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