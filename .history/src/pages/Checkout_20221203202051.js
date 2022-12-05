import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "../components/input/Input";
import { auth } from "../firebase.config";
import IconChevronLeft from "../icons/IconChevronLeft";
import IconDown from "../icons/IconDown";
import IconUp from "../icons/IconUp";
import * as yup from "yup";
const delivery = [
  {
    title: "Same Day",
    icon: (
      <ion-icon
        name="rocket-outline"
        style={{ width: "20px", height: "20px" }}
      ></ion-icon>
    ),
  },
  {
    title: "Express",
    icon: (
      <ion-icon
        name="bicycle-outline"
        style={{ width: "20px", height: "20px" }}
      ></ion-icon>
    ),
  },
  {
    title: "Normal",
    icon: (
      <ion-icon
        name="walk-outline"
        style={{ width: "20px", height: "20px" }}
      ></ion-icon>
    ),
  },
];
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Please enter your Email address"),
  phone: yup.string().matches(phoneRegExp, 'Please enter your Phone number'),
  street: yup.string().required("Please enter your Street Address")
})
const Checkout = () => {
  const navigate = useNavigate();
  const [changeIcon1, setChangeIcon1] = useState(false);
  const [changeIcon2, setChangeIcon2] = useState(false);
  const [changeIcon3, setChangeIcon3] = useState(false);
  const [activeDelivery, setActiveDelivery] = useState("");
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

  const handleCollapseContact = () => {
    const info = document.querySelector(".info");
    info.classList.toggle("active-arrcodion");
    setChangeIcon1(!changeIcon1);
  };
  const handleCollapseDelivery = () => {
    const delivery = document.querySelector(".delivery");
    delivery.classList.toggle("active-arrcodion");
    setChangeIcon2(!changeIcon2);
  };
  const handleCollapsePayment = () => {
    const payment = document.querySelector(".payment");
    payment.classList.toggle("active-arrcodion");
    setChangeIcon3(!changeIcon3);
  };
  const handleActiveDelivery = (e) => {
    const value = e.target.textContent;
    setActiveDelivery(value);
  };
  const onSubmit = () => {

  }
  return (
    <div className="my-[80px]">
      <div className="container p-5">
        <div className="mt-10 grid grid-cols-[2fr,1fr] gap-x-10">
          <div>
            <div className="flex flex-col mb-10">
              <div
                className="mb-10 flex gap-x-2 items-center transition-all hover:text-primary cursor-pointer"
                onClick={() => navigate("/cart")}
              >
                <button className="p-2 rounded-md border ">
                  <IconChevronLeft className={"w-5 h-5"}></IconChevronLeft>
                </button>
                <span className="font-medium">Back to cart</span>
              </div>
              <h3 className="text-[40px] font-medium mb-3">Checkout</h3>
              <p className="text-text3">
                Checkout is a counter where you pay for things you are buying
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full h-full border rounded-lg px-5 py-3 flex items-center justify-between cursor-pointer"
                  onClick={handleCollapseContact}
                >
                  <h3 className="text-lg font-medium">
                    1. Contact Information
                  </h3>
                  <span className="transition-all">
                    {changeIcon1 ? <IconDown></IconDown> : <IconUp></IconUp>}
                  </span>
                </div>
                <div className="info max-h-0 opacity-0 overflow-hidden bg-white rounded-lg">
                  <form
                  onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-2 gap-5 text-sm p-5  items-start"
                    autoComplete="off"
                  >
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
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="border rounded-lg px-5 py-3 flex items-center justify-between cursor-pointer"
                  onClick={handleCollapseDelivery}
                >
                  <h3 className="text-lg font-medium">2. Delivery Methob</h3>
                  <span className="transition-all">
                    {changeIcon2 ? <IconDown></IconDown> : <IconUp></IconUp>}
                  </span>
                </div>
                <div className="flex gap-5 items-center max-h-0 overflow-hidden delivery opacity-0">
                  {delivery.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-center w-[160px] h-[50px] font-medium text-[15px] gap-x-2 border rounded-xl cursor-pointer delivery-item ${
                        activeDelivery === item.title
                          ? "bg-primary text-white"
                          : "bg-white text-text3"
                      }`}
                      onClick={handleActiveDelivery}
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div
                  className="border rounded-lg px-5 py-3 flex items-center justify-between cursor-pointer"
                  onClick={handleCollapsePayment}
                >
                  <h3 className="text-lg font-medium">3. Payment Methob</h3>
                  <span className="transition-all">
                    {changeIcon3 ? <IconDown></IconDown> : <IconUp></IconUp>}
                  </span>
                </div>
                <p className="payment p-5 overflow-hidden max-h-0 opacity-0 border rounded-lg">
                  Customers will make payment after receiving the goods
                </p>
              </div>
            </div>
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
