import React from 'react';
import img1 from '../../../assets/vagitable57.png';
import img2 from '../../../assets/vagitable58.png';
import img3 from '../../../assets/vagitable56.png';

const Download = () => {
    return (
        <div className='bg-base-200 mt-12'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='lg:w-1/2 mb-4 lg:mb-0 container lg:text-start py-8 text-center'>
                        <h1 className='text-3xl font-semibold mb-2'>
                            Make your online shop easier with our mobile app
                        </h1>
                        <p className='text-gray-700'>
                            Village Market makes online grocery shopping fast and easy. Get groceries delivered and order the best of seasonal farm fresh food.
                        </p>

                        <div className='flex mt-4 lg:justify-start  justify-center'>
                            <a href="" download className='mr-4 '>
                                <img src={img1} alt="Image 1" className='rounded-lg'/>
                            </a>
                            <img src={img2} alt="Image 2"  className='rounded-lg'/>
                        </div>
                    </div>
                    <div className='lg:w-1/2'>
                        <img src="https://borobazar.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fapp-thumbnail.png&w=640&q=75" alt="Image 3" className='w-full border-none hidden lg:block' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Download;
