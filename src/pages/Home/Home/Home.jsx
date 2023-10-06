import React from 'react';
import EcommerceBanner from '../Banner/EcommerceBanner';
import Reffer from '../Reffer/Reffer';
import BestSeller from '../BestSeller/BestSeller';
import FreshVegitable from '../FreshVegitable/FreshVegitable';
import Chips from '../ChipsCollection/Chips';
import Curated from '../CuratedCollection/Curated';

const Home = () => {
    return (
        <div className='bg-white'>
            <EcommerceBanner />
            <Reffer />
            <BestSeller />
            <FreshVegitable />
            <Chips />
            <Curated />
        </div>
    );
};

export default Home;