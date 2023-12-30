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

const FreshVegitable = () => {
  const items = [
    {
      id: 1,
      label: "ON SALE",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    {
      id: 2,
      label: "ON SALE",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    {
      id: 3,
      label: "REGULAR",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    {
      id: 4,
      label: "REGULAR",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    {
      id: 5,
      label: "REGULAR",
      price: 554,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    // Add more items here
  ];

  return (
    <div className="bg-white p-2">
      <div className="bg-white my-5 text-2xl font-semibold">
      <h3>Fresh vegetables</h3>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          768: {
            slidesPerView: 4, // Display 2 slides per view on devices with width >= 768px
          },
        }}
      >
          {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="rounded-lg shadow-md p-4 card flex flex-col justify-between items-center bg-gray-50 border mb-6">
              {item.label === "ON SALE" && (
                <button className="bg-green-500 text-xs text-white border rounded-full px-2 py-1 absolute top-2 right-2">
                  {item.label}
                </button>
              )}
              <div className="overflow-hidden mb-4">
                <img
                  src={img1}
                  alt=""
                  className="object-cover w-full rounded-full scale-75 translate-x-2 skew-y-1 md:transform-none transition duration-700 ease-in-out transform hover:scale-110"
                />
                {item.label === "REGULAR" && (
                  <div>
                    <button className="bg-green-500 text-base text-white border rounded-full px-2 py-1 absolute bottom-4 right-2">
                      + 
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center">
                <div className="flex justify-center items-center mb-2">
                  <h6 className="font-semibold text-lg">$ {item.price}</h6>
                  <span className="line-through text-gray-500 text-xs ml-2">
                    $ {item.originalPrice}
                  </span>
                </div>
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-xs text-gray-600">{item.quantity}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FreshVegitable;
