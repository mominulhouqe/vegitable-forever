import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../BestSeller/BestSeller.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/vagitable05.png';
import img2 from '../../../assets/vagitable09.png';
import img3 from '../../../assets/vagitable10.png';

const Chips = () => {
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
            setIsEnd(false);
            if (swiperRef.current.swiper.isBeginning) {
                setIsBeginning(true);
            }
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
            setIsBeginning(false);
            if (swiperRef.current.swiper.isEnd) {
                setIsEnd(true);
            }
        }
    };

    return (
        <div className='bg-white p-2'>
            <div className='bg-white my-5 text-2xl font-semibold'>
                <h3>Chips collection</h3>
            </div>
            <Swiper
                ref={swiperRef}
                breakpoints={{
                    576: {
                        slidesPerView: 2, // Display 2 cards on small devices
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
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
                        <div className="rounded-md shadow-md p-1 card">
                            <button className="bg-[#02B290] text-xs text-white border rounded-full px-2 py-1 absolute top-2 right-2">
                                {item.label}
                            </button>
                            <div className="image-container">
                                <img src={img3} alt="" className="imags" />
                                <div>
                                    <button
                                        className='btn border-none btn-sm absolute rounded-full lg:right-4 mb-1 bg-[#02B290] hover:bg-lime-600'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <div className="flex gap-1 my-1">
                                    <h6 className='font-semibold text-sm'>$ {item.price}</h6>
                                    <h6 className="line-through text-slate-400 text-xs">$ {item.originalPrice}</h6>
                                </div>
                                <p className='text-xs text-left'>{item.name}</p>
                                <p className='text-xs text-left text-slate-600 my-1'>{item.quantity}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
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

export default Chips;
