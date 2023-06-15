import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({
  _id,
  title,
  description,
  imageUrl,
  selling_price,
  handleAddToBasket,
}) => {
  const navigate = useNavigate();

  const addToBasket = (e) => {
    e.stopPropagation();
    handleAddToBasket(_id);
  };

  return (
    <div onClick={() => navigate(`/product/${_id}`)}>
      <div className="flex flex-col border drop-shadow-lg justify-between">
        <div className="p-4">
          <img className="object-cover w-48 h-auto mx-auto" src={imageUrl} />
          <p className=" font-bold my-2">{title}</p>
          <p>{description?.substring(0, 50) + "..."}</p>
        </div>

        <div className="flex  my-6 items-center justify-end">
          <p className="text-end text-white p-2 rounded-r-full bg-red-500">{`${selling_price?.toLocaleString(
            undefined,
            { minimumFractionDigits: 0 }
          )} ریال`}</p>
        </div>
        <div>
          <button
            className="p-2 border bg-gray-100 w-full text-gray-500 hover:bg-gray-50"
            onClick={addToBasket}
          >
            اضافه به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
