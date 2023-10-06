import React from 'react';
import EcommerceBanner from '../Banner/EcommerceBanner';
import Reffer from '../Reffer/Reffer';
import BestSeller from '../BestSeller/BestSeller';
import FreshVegitable from '../FreshVegitable/FreshVegitable';
import Chips from '../ChipsCollection/Chips';

const Home = () => {
    return (
        <div className='bg-white'>
            <EcommerceBanner />
            <Reffer />
            <BestSeller />
            <FreshVegitable />
            <Chips />
        </div>
    );
};

export default Home;