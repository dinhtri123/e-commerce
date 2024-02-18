import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { cartActions } from "../../store/slices/cartSlice";
import IconCart from "../../icons/IconCart";
import Button from "../button/Button";

const Card = ({ item }) => {
  const { id, name, thumbnail, price, categoryName } = item;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName: name,
        image: thumbnail,
        price,
      })
    );
    toast.success("Product added successfully");
  };
  return (
    <div className="overflow-hidden transition-all card w-full h-full rounded-lg">
      <div className="relative w-full h-[300px] overflow-hidden p-2">
        <img
          src={thumbnail[0]}
          alt=""
          className="object-cover w-full h-full mb-4 rounded-lg transition-all cursor-pointer"
          onClick={() => navigate(`/product/${id}`)}
        />
      </div>
      <div className="flex flex-col p-5 justify-between gap-y-3 card-content">
        <div className="flex items-center justify-between">{categoryName}</div>
        <h3 className="font-semibold w-full h-[2rem] flex items-center">
          {name}
        </h3>
        <div className="flex justify-between items-center gap-x-5">
          <p className="font-semibold text-error text-lg">${price}</p>
          <div className="flex gap-x-2">
            <div
              className="rounded-md bg-primary text-white p-2 cursor-pointer flex items-center justify-center"
              onClick={addToCart}
            >
              <IconCart></IconCart>
            </div>
          </div>
        </div>
        <Button onClick={() => navigate(`/product/${id}`)}>Detail</Button>
      </div>
    </div>
  );
};
export default Card;
