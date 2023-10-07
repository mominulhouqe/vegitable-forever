import React from 'react';
import { Container, Typography } from '@mui/material';

const Copyright = () => {
    return (
        <div className="py-6 px-2 ">

            <div  className="flex justify-between items-center p-4">
                <div>
                    <Typography variant="body2" className="">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </Typography>
                </div>
                <div>
                    <div className='flex gap-2'>
                        <img src="https://borobazar.vercel.app/assets/images/payment/mastercard.svg" alt="" />
                        <img src="https://borobazar.vercel.app/assets/images/payment/visa.svg" alt="" />
                        <img src="https://borobazar.vercel.app/assets/images/payment/paypal.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
