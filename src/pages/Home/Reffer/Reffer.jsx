import React, { useState } from 'react';
import img from '../../../assets/vagitable04.png';
import img2 from '../../../assets/vagitable05.png';
import img3 from '../../../assets/vagitable07.png';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Reffer = () => {
    const [showCarousel, setShowCarousel] = useState(false);

    const toggleCarousel = () => {
        setShowCarousel(!showCarousel);
    };

    return (
        <div>
            <div className='flex justify-between items-center gap-3 mx-auto p-2'>
                {/* Content for small devices */}
                <div className={`lg:hidden ${showCarousel ? 'w-full' : 'lg:w-1/2'} ${showCarousel ? 'carousel-wrapper' : 'w-full'}`}>
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop
                        emulateTouch
                        swipeable
                        showArrows={!showCarousel}
                    >
                        <div>
                            <div className=" flex bg-[#EFF5F9] justify-center items-center">
                                <img src={img} alt="" className='' />
                                <div className=" p-4">
                                    <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                                    <Button variant="contained" color="secondary" size="small" className="">
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className=" flex bg-[#F9F7F7]  justify-center items-center">
                                <img src={img2} alt="" />
                                <div className=" p-4">
                                    <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                                    <Button variant="contained" color="secondary" size="small" className="">
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex bg-[#EFF5F9]  justify-center items-center">
                                <img src={img3} alt="" />
                                <div className="p-4">
                                    <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                                    <Button variant="contained" color="secondary" size="small" className="">
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

                {/* Content for large devices */}
                <div className={`lg:w-1/2 flex bg-[#EFF5F9] ${showCarousel ? 'hidden lg:flex' : 'lg:flex hidden'}`}>
                    <img src={img} alt="" className="w-32" />
                    <div className="w-1/2 p-4">
                        <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                        <Button variant="contained" color="secondary" size="small" className="">
                            Learn more
                        </Button>
                    </div>
                </div>
                {/* Content for large devices */}
                <div className={`lg:w-1/2 flex bg-[#EFF5F9] ${showCarousel ? 'hidden lg:flex' : 'lg:flex hidden'}`}>
                    <img src={img} alt="" className="w-32" />
                    <div className="w-1/2 p-4">
                        <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                        <Button variant="contained" color="secondary" size="small" className="">
                            Learn more
                        </Button>
                    </div>
                </div>
                {/* Content for large devices */}
                <div className={`lg:w-1/2 flex bg-[#EFF5F9] ${showCarousel ? 'hidden lg:flex' : 'lg:flex hidden'}`}>
                    <img src={img} alt="" className="w-32" />
                    <div className="w-1/2 p-4">
                        <h6 className="text-lg font-semibold">Refer Friends & discount on all item</h6>
                        <Button variant="contained" color="secondary" size="small" className="">
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reffer;
