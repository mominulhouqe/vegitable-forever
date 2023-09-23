import React from 'react';
import Home from '../pages/Home/Home/Home';
import { Outlet } from 'react-router-dom';
import Menu from '../pages/Shared/Menuber/Menu';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
          <Menu />
            <Outlet></Outlet>
            <Footer />

        </div>
    );
};

export default Main;