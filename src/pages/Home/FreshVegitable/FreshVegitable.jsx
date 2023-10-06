import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../BestSeller/BestSeller.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import { FaEye, FaPlus } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../../assets/vagitable05.png'
import img2 from '../../../assets/vagitable09.png'
import img3 from '../../../assets/vagitable10.png'
import { Button, Modal } from '@mui/material'; // Assuming you have a Modal component
import { Link } from 'react-router-dom';

const FreshVegitable = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const items = [
        {
            id: 1,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 1,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 1,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        // Add more items here
    ]

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
            setIsEnd(false); // Enable "Next" button after going back
            if (swiperRef.current.swiper.isBeginning) {
                setIsBeginning(true); // Disable "Previous" button if at the beginning
            }
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            setIsBeginning(false); // Enable "Previous" button after going forward
            if (swiperRef.current.swiper.isEnd) {
                setIsEnd(true); // Disable "Next" button if at the end
            }
        }
    }

  

    return (
        <div className='bg-white p-2'>
            <div className='bg-white my-5 text-2xl font-semibold'>
                <h3>Fresh vegetables</h3>
            </div>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    // When window width is <= 576px
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // When window width is <= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    // When window width is <= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    // When window width is <= 1200px
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 35,
                    },
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                pagination={{
                    clickable: true,
                    type: 'bullets',
                }}
                className="mySwiper bg-white"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="border rounded-md shadow-2xl p-2">
                            <button className="bg-[#02B290] text-sm text-white border rounded-xl relative right-28 btn-sm ">
                                {item.label}
                            </button>
                            <div className="image-container">
                                <img src={img3} alt="" className="imags  lg:relative" />
                                <div>
                                    <button
                                        className='btn border-none btn-sm absolute rounded-full lg:right-6  mb-2 bg-[#02B290] hover:bg-lime-600 '

                                    >
                                       +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-3 my-4">
                                    <h6 className='font-semibold'>$ {item.price}</h6>
                                    <h6 className="line-through  text-slate-400 text-sm">$ {item.originalPrice}</h6>
                                </div>
                                <p className='text-sm text-left'>{item.name}</p>
                                <p className='text-sm text-left text-slate-600 my-2'>{item.quantity}</p>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}

                <SwiperSlide>
                    <div className='link justify-center items-center mt-[50%] text-[#02B290] '>
                        <Link to='/'> <FaArrowRight className='rounded-full bg-slate-50' /> See all</Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className='flex justify-center my-2'>
                <button
                    className={`bg-white hover:text-white hover:bg-[#02B290] border shadow-md rounded-full px-4 py-2 mr-2 ${isBeginning ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                    onClick={goPrev}
                    disabled={isBeginning}
                >
                    <FaArrowLeft />
                </button>
                <button
                    className={`bg-white shadow-md border hover:text-white hover:bg-[#02B290]  rounded-full px-4 py-2 ${isEnd ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                    onClick={goNext}
                    disabled={isEnd}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default FreshVegitable;
