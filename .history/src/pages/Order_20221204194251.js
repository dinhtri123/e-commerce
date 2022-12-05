import React from "react";
import { useNavigate } from "react-router-dom";
import IconChevronLeft from "../icons/IconChevronLeft";

const Order = () => {
    const navigate = useNavigate();
  return (
    <div className="my-[80px]">
      <div className="container px-5">
        <div className="flex flex-col mb-10 mt-5">
          <div
            className="mb-5 flex gap-x-2 items-center transition-all hover:text-primary cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <button className="p-2 rounded-md border">
              <IconChevronLeft className={"w-5 h-5"}></IconChevronLeft>
            </button>
            <span className="font-medium">Back to cart</span>
          </div>
          <h3 className="text-[40px] font-medium mb-3 text-center">Order</h3>
          <p className="text-text3">
            Checkout is a counter where you pay for things you are buying
          </p>
        </div>
      </div>
    </div>
  );
};

export default Order;
