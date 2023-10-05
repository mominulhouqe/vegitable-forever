import React from 'react';
import EcommerceBanner from '../Banner/EcommerceBanner';
import Reffer from '../Reffer/Reffer';
import BestSeller from '../BestSeller/BestSeller';

const Home = () => {
    return (
        <div className='bg-white'>
            <EcommerceBanner />
            <Reffer />
            <BestSeller />
        </div>
    );
};

export default Home;