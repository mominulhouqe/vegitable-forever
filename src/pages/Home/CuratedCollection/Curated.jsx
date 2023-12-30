import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import img1 from "../../../assets/vagitable05.png";
import img2 from "../../../assets/vagitable09.png";
import img3 from "../../../assets/vagitable10.png";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
const items = [
  {
    id: 1,
    label: "GROCERY STORE",
    title: "Free Delivery from Your Store",
    description: "Get ready for spring today with $0 delivery fees.",
  },
  {
    id: 2,
    label: "BREAKFAST FOOD",
    title: "Fresh Healthy Breakfast food",
    description: "Get ready for spring today with $0 delivery fees.",
  },
  {
    id: 3,
    label: "LUNCH OPTIONS",
    title: "Delicious Lunch Choices",
    description: "Enjoy a variety of lunch options delivered to your doorstep.",
  },
  {
    id: 4,
    label: "LUNCH OPTIONS",
    title: "Delicious Lunch Choices",
    description: "Enjoy a variety of lunch options delivered to your doorstep.",
  },
  // Add more items here
];

const Curated = () => {
  return (
    <div className="my-6 p-2">
      <div className="bg-white my-5 text-2xl font-semibold">
        <h3>Curated collections</h3>
      </div>


      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className="mx-auto border rounded-lg shadow-md">
              <CardActionArea>
                <CardMedia
                  component="img"
      
                  image={img2} // Replace with item-specific image
                  alt="collection"
                  className="object-contain w-full h-80 rounded-t-lg"
                />
                <CardContent className="p-4">
                  <Typography gutterBottom variant="h6" component="div">
                    {item.label}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" className="mt-2 text-gray-600">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Curated;
