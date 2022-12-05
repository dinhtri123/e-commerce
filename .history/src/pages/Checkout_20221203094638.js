import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Input from "../components/input/Input";
import { auth } from "../firebase.config";
const Checkout = () => {
  const userInfo = auth.currentUser;
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const [valueName, setValueName] = useState(userInfo?.displayName);
  const [valueEmail, setValueemail] = useState(userInfo?.displayName)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSetName = (e) => {
    setValueName(e.target.value)
  }
  return (
    <div className="my-[80px]">
      <div className="container p-5">
        <div className="bg-primary rounded-lg h-[180px] flex items-center justify-center">
          <h3 className="text-[30px] text-white font-semibold">Checkout</h3>
        </div>
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
                value={valueName}
                className={"px-5 py-2"}
                onChange={handleSetName}
              ></Input>
              <div className="flex flex-col gap-2">
                <label for="email" className="font-medium">
                  *Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="phone" className="font-medium">
                  *Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Enter your phone number..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="address" className="font-medium">
                  *Street Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter your street address..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="city" className="font-medium">
                  *City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Enter your city..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="code" className="font-medium">
                  *Postal code
                </label>
                <input
                  type="text"
                  id="code"
                  placeholder="Enter your postal code..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label for="country" className="font-medium">
                  *Country
                </label>
                <input
                  type="text"
                  id="country"
                  placeholder="Enter your country..."
                  className="border rounded-md px-5 py-2"
                />
              </div>
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
              <p>Free Shipping</p>
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
