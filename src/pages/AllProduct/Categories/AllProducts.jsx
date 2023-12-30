// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from "../../../assets/vagitable09.png";
import Drawers from "./Drawers";
import Accordian from "./Accordian";

const AllProducts = () => {
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
      id: 3,
      label: "REGULAR",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    {
      id: 3,
      label: "ON SALE",
      price: 54,
      originalPrice: 4,
      name: "Fresh Green Leaf Lettuce",
      quantity: "1 each",
    },
    // Add more items here
  ];

  return (
    <div className="flex justify-between gap-2">
      <div className="p-4 hidden lg:block w-1/5">
        {/* Hide on small devices */}
        <h3 className="text-xl font-bold">Categories</h3>
        {/* accordion */}
        <Accordian />
      </div>

      <div className="w-4/5">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div key={index}>
              <div className="rounded-md shadow-md p-1 card flex justify-center items-center">
                {item.label === "ON SALE" && (
                  <button className="bg-[#02B290] text-xs text-white border rounded-full px-2 py-1 absolute top-2 right-2">
                    {item.label}
                  </button>
                )}
                <div className="image-container">
                  <img src={img1} alt="" className="imags" />
                  {item.label === "REGULAR" && (
                    <div>
                      <button className="btn border-none btn-sm absolute rounded-full right-4 mb-1 bg-[#02B290] hover:bg-lime-600">
                        +
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <div className="flex gap-1 my-1">
                    <h6 className="font-semibold text-sm">$ {item.price}</h6>
                    <h6 className="line-through text-slate-400 text-xs">
                      $ {item.originalPrice}
                    </h6>
                  </div>
                  <p className="text-xs text-left">{item.name}</p>
                  <p className="text-xs text-left text-slate-600 my-1">
                    {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* For small device accordon */}
      <Drawers />
    </div>
  );
};

export default AllProducts;
