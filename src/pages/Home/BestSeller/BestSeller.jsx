import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './BestSeller.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


import { FaEye } from 'react-icons/fa';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img1 from '../../../assets/vagitable05.png'
import { Button } from '@mui/material';

const BestSeller = () => {
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
                <h3>Best sellers in your area</h3>
            </div>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    // When window width is <= 576px
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    // When window width is <= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    // When window width is <= 992px
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    // When window width is <= 1200px
                    1200: {
                        slidesPerView: 5,
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
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="border rounded-md shadow-2xl p-2">
                            <span className="bg-[#02B290] p-2 text-sm text-white border rounded-xl relative right-[86px]">
                                {item.label}
                            </span>
                            <div className="image-container">
                                <img src={img1} alt="" className="imags " />
                            </div>
                            <div>
                                <div className="flex gap-3">
                                    <h6>$ {item.price}</h6>
                                    <h6 className="line-through">$ {item.originalPrice}</h6>
                                </div>
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    No More
                </SwiperSlide>
            </Swiper>
            <div className='flex justify-center my-2'>
                <button
                    className={`bg-white hover:text-white hover:bg-[#02B290] border  rounded-full px-4 py-2 mr-2 ${isBeginning ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                    onClick={goPrev}
                    disabled={isBeginning}
                >
                    <FaArrowLeft />
                </button>
                <button
                    className={`bg-white border hover:text-white hover:bg-[#02B290]  rounded-full px-4 py-2 ${isEnd ? 'bg-gray-300 cursor-not-allowed' : ''}`}
                    onClick={goNext}
                    disabled={isEnd}
                >
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default BestSeller;
