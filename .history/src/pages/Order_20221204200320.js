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
            className="flex gap-x-2 items-center transition-all hover:text-primary cursor-pointer"
            onClick={() => navigate("/cart")}
          >
            <button className="p-2 rounded-md border">
              <IconChevronLeft className={"w-5 h-5"}></IconChevronLeft>
            </button>
            <span className="font-medium">Back to cart</span>
          </div>
          <h3 className="text-[40px] font-medium mb-3 text-center">Order</h3>
          <p className="text-text3 text-center">
            This is the information of the products that you have ordered
          </p>
        </div>
        <table className="w-full table-order">
            <thead>
                <tr className="w-full font-medium border-0 border-b">
                    <th>Order ID</th>
                    <th>Total Quantity</th>
                    <th>Shipping & Delivery</th>
                    <th>Total Cost</th>
                    <th>Delivery Methob</th>
                    <th>Status</th>
                    <th className="w-[80px]"></th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-center">
                    <td>01234567</td>
                    <td>x3</td>
                    <td>$200</td>
                    <td>$1450</td>
                    <td>Express</td>
                    <td>Pending</td>
                    <td>Show</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
