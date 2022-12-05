import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import { auth } from "../firebase.config";
import IconChevronLeft from "../icons/IconChevronLeft";
const Checkout = () => {
  const navigate = useNavigate();
  const userInfo = auth.currentUser;
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [valueName, setValueName] = useState(userInfo?.displayName);
  const [valueEmail, setValueEmail] = useState(userInfo?.email);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSetName = (e) => {
    setValueName(e.target.value);
  };
  const handleSetEmail = (e) => {
    setValueEmail(e.target.value);
  };
  return (
    <div className="my-[80px]">
      <div className="container p-5">
        <div
          className="my-5 flex gap-x-2 items-center transition-all hover:text-primary cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <button className="p-2 rounded-md border ">
            <IconChevronLeft className={"w-5 h-5"}></IconChevronLeft>
          </button>
          <span className="font-medium">Back to cart</span>
        </div>
        <h3>Checkout</h3>
        <div className="mt-10 grid grid-cols-[2fr,1fr] gap-x-10">
          <div>
            <h3 className="text-[30px] mb-10 font-semibold">
              Billing Information
            </h3>
            <form className="grid grid-cols-2 gap-5 text-sm" autoComplete="off">
              <Input
                text={"Name*"}
                name="name"
                placeholder="Enter your name..."
                control={control}
                value={valueName}
                className={"px-5 py-2"}
                onChange={handleSetName}
              ></Input>
              <Input
                text={"Email*"}
                name="email"
                placeholder="Enter your email address..."
                control={control}
                value={valueEmail}
                className={"px-5 py-2"}
                onChange={handleSetEmail}
              ></Input>
              <Input
                text={"Phone Number*"}
                name="phone"
                type="tel"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                placeholder="Enter your phone number..."
                control={control}
                className={"px-5 py-2"}
              ></Input>
              <Input
                text={"Street Address*"}
                name="street"
                placeholder="Enter your street address..."
                control={control}
                className={"px-5 py-2"}
              ></Input>
              <Input
                text={"City*"}
                name="city"
                placeholder="Enter your city..."
                control={control}
                className={"px-5 py-2"}
              ></Input>
              <Input
                text={"Country*"}
                name="country"
                placeholder="Enter your country..."
                control={control}
                className={"px-5 py-2"}
              ></Input>
            </form>
          </div>
          <div>
            <h3 className="text-[30px] mb-10 font-semibold">Order Summary</h3>
            <div className="flex flex-col gap-5 bg-blueDark rounded-lg text-white p-5">
              <div className="flex gap-x-2 justify-between">
                <p>Total Quantity: </p>
                <span>{totalQty} items</span>
              </div>
              <div className="flex gap-x-2 justify-between">
                <p>Subtotal: </p>
                <span>${totalAmount}</span>
              </div>
              <div className="flex gap-x-2 justify-between">
                <p>Shipping: </p>
                <span>$0</span>
              </div>
              <span className="w-full h-[1px] bg-[#eee]"></span>
              <div className="flex gap-x-2 justify-between text-lg">
                <p>Total Cost: </p>
                <span>${totalAmount}</span>
              </div>
              <button className="mt-5 w-full bg-white text-black h-[45px] flex items-center justify-center font-medium rounded-lg">
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
