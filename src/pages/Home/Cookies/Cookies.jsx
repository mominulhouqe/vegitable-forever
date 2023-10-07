import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../BestSeller/BestSeller.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Button, Modal } from '@mui/material';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/vagitable05.png';
import img2 from '../../../assets/vagitable09.png';
import img3 from '../../../assets/vagitable10.png';

const Cookies = () => {
    const sliderRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const goPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setIsEnd(false);
            if (sliderRef.current.slickIsFirst()) {
                setIsBeginning(true);
            }
            setCurrentSlide(sliderRef.current.innerSlider.state.currentSlide);
        }
    };

    const goNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setIsBeginning(false);
            if (sliderRef.current.slickIsLast()) {
                setIsEnd(true);
            }
            setCurrentSlide(sliderRef.current.innerSlider.state.currentSlide);
        }
    };

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
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'REGULAR',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'REGULAR',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'REGULAR',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        // Add more items here
    ];

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        prevArrow: <button onClick={goPrev} className={`bg-white hover:text-white hover:bg-[#02B290] border shadow-md rounded-full px-4 py-2 mr-2 ${isBeginning ? 'bg-gray-300 cursor-not-allowed' : ''}`} disabled={isBeginning}><FaArrowLeft /></button>,
        nextArrow: <button onClick={goNext} className={`bg-white shadow-md border hover:text-white hover:bg-[#02B290] rounded-full px-4 py-2 ${isEnd ? 'bg-gray-300 cursor-not-allowed' : ''}`} disabled={isEnd}><FaArrowRight /></button>,
        afterChange: (current) => setCurrentSlide(current), // Update the current slide when it changes
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='bg-white p-2'>
            <div className='bg-white my-5 text-2xl font-semibold'>
                <h3>Cookies & Cakes</h3>
            </div>
            <Slider ref={sliderRef} {...settings} className='mySlider bg-white'>
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='rounded-md shadow-md p-1 card flex justify-center items-center'>
                            {item.label === 'ON SALE' && (
                                <button className='bg-[#02B290] text-xs text-white border rounded-full px-2 py-1 absolute top-2 right-2'>
                                    {item.label}
                                </button>
                            )}
                            <div className='image-container'>
                                <img src={img3} alt='' className='imags' />
                                {item.label === 'REGULAR' && (
                                    <div>
                                        <button
                                            className='btn border-none btn-sm absolute rounded-full right-4 mb-1 bg-[#02B290] hover:bg-lime-600'
                                        >
                                            +
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div>
                                <div className='flex  gap-1 my-1'>
                                    <h6 className='font-semibold text-sm'>$ {item.price}</h6>
                                    <h6 className='line-through text-slate-400 text-xs'>$ {item.originalPrice}</h6>
                                </div>
                                <p className='text-xs text-left'>{item.name}</p>
                                <p className='text-xs text-left text-slate-600 my-1'>{item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Cookies;
