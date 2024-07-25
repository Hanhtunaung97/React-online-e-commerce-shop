import React from "react";
import RatingComponents from "./Rating.components";

const ProductComponents = ({
  product: {
    id,
    title,
    price,
    image,
    description,
    rating: { rate, count },
  },
}) => {
  return (
    <div className="border border-slate-400 rounded-lg p-3 flex gap-y-3 flex-col hover:scale-105 hover:shadow group duration-200 ">
      <div className="mb-1 ">
        <img src={image} alt="" className="h-24 ms-4 -mt-12 group-hover:-rotate-6 duration-150" />
      </div>
      <div className=" flex flex-col gap-y-2">
        <h1 className="font-headings text-lg line-clamp-2 text-slate-600 font-semibold">
          {title}
        </h1>
        <p className="text-slate-500 line-clamp-3 ">{description}</p>
      </div>
      <RatingComponents rating={{ rate, count }} />
      <div className="flex justify-between items-center ">
        <p className="text-slate-600 font-semibold">
          Price <span>${price}</span>
        </p>
        <button className="bg-white border border-slate-400 px-3 py-1 rounded-lg text-xs active:scale-90 duration-150 active:bg-white active:text-slate-400 hover:bg-slate-400 hover:text-white">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponents;
