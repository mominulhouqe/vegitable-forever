import React, { useState } from 'react';
import img from '../../../assets/vagitable04.png';
import img2 from '../../../assets/vagitable05.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@mui/material';
const EcommerceBanner = () => {
    const [showSecondContent, setShowSecondContent] = useState(false);

    const toggleContent = () => {
        setShowSecondContent(!showSecondContent);
    };

    return (
        <div className='flex justify-between gap-5 p-2'>
            {/* Content for the first section */}
            <div className={`lg:w-1/2 w-full flex bg-[#EFF5F9] ${showSecondContent ? 'hidden md:flex' : 'flex '}`}>
            <div className="w-1/2 p-4">
                    <h6 className="text-lg font-semibold">GROCERY STORE</h6>
                    <h5 className="text-xl font-bold">Free Delivery from Your Store</h5>
                    <p className="text-gray-600 mt-2 mb-4">
                        Get ready for spring today with $0 delivery fees.
                    </p>
                    <Button variant="contained" color="secondary" size="small" className="">
                        Explore More
                    </Button>
                </div>
                <img src={img} alt="" className="w-1/2" />
                {/* Arrow icon for small devices */}
                <div className="md:hidden">
                    <button className="arrow-button font-bold  p-2 flex justify-center items-center relative top-[50%] hover:text-white hover:bg-[#22BC9E] bg-white rounded-full" onClick={toggleContent}>
                    <FaArrowLeft />  {/* &#8592; */}
                    </button>
                </div>

            </div>

            {/* Content for the second section */}
            <div className={`lg:w-1/2 flex w-full bg-[#F9F7F7] ${!showSecondContent ? 'hidden md:flex' : 'flex'}`}>

                {/* Arrow icon for small devices */}
                <div className="md:hidden">
                    <button className="arrow-button font-bold p-2 flex justify-center items-center relative top-[50%] hover:text-white hover:bg-[#22BC9E] bg-white rounded-full " onClick={toggleContent}>
                        {/* &#8594; */}
                        <FaArrowRight />
                    </button>
                </div>

                <div className="w-1/2 p-4">
                    <h6 className="text-lg font-semibold">BREAKFAST FOOD</h6>
                    <h5 className="text-xl font-bold">Fresh Healthy Breakfast food</h5>
                    <p className="text-gray-600 mt-2 mb-4">
                        Get ready for spring today with $0 delivery fees.
                    </p>
                    <Button variant="contained" color="secondary" size="small" className="">
                        Explore More
                    </Button>
                </div>
                <img src={img2} alt="" className="w-1/2" />

            </div>
        </div>
    );
};

export default EcommerceBanner;
