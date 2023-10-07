import React from 'react';
import EcommerceBanner from '../Banner/EcommerceBanner';
import Reffer from '../Reffer/Reffer';
import BestSeller from '../BestSeller/BestSeller';
import FreshVegitable from '../FreshVegitable/FreshVegitable';
import Chips from '../ChipsCollection/Chips';
import Curated from '../CuratedCollection/Curated';
import Download from '../Downloads/Download';
import PromotionalBanner from '../Promotion/PromotionalBanner';
import WhisList from '../WhistList/WhistList';
import Cookies from '../Cookies/Cookies';

const Home = () => {
    return (
        <div className='bg-white'>
            <EcommerceBanner />
            <Reffer />
            <BestSeller />
            <FreshVegitable />
            <Chips />
            <Curated />
            {/* <PromotionalBanner />
            <WhisList /> */}
            <Cookies />
            <Download />

        </div>
    );
};

export default Home;