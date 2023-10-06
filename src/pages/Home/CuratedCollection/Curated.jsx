import React from 'react';
import Slider from 'react-slick';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from '../../../assets/vagitable05.png';
const items = [
    {
        id: 1,
        label: 'GROCERY STORE',
        title: 'Free Delivery from Your Store',
        description: 'Get ready for spring today with $0 delivery fees.',
    },
    {
        id: 2,
        label: 'BREAKFAST FOOD',
        title: 'Fresh Healthy Breakfast food',
        description: 'Get ready for spring today with $0 delivery fees.',
    },
    {
        id: 3,
        label: 'LUNCH OPTIONS',
        title: 'Delicious Lunch Choices',
        description: 'Enjoy a variety of lunch options delivered to your doorstep.',
    },
    {
        id: 4,
        label: 'LUNCH OPTIONS',
        title: 'Delicious Lunch Choices',
        description: 'Enjoy a variety of lunch options delivered to your doorstep.',
    },
    // Add more items here
];

const Curated = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3, // Large devices - 3 slides per view
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Small devices breakpoint
                settings: {
                    slidesToShow: 1, // Small devices - 1 slide per view
                },
            },
        ],
    };

    return (
        <div className='my-6 p-2'>
            <div className='bg-white my-5 text-2xl font-semibold'>
                <h3>Curated collections</h3>
            </div>
            <Slider {...settings}>
                {items.map(item => (
                    <div key={item.id}>

                        <Card sx={{ maxWidth: 445}} className='mx-auto'>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={img2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.label}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                       
                        </Card>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Curated;
