import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/slices/cartSlice";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import useSWR from "swr";
import { fetcher } from "../apiConfig";
import Heading from "../components/heading/Heading";
import SimilarProduct from "../components/product/SimilarProduct";
import IconCheck from "../icons/IconCheck";
import { toast } from "react-toastify";

const icons = ["/instagram.png", "/twitter.png", "/slack.png", "/meta.png"];
const ProductDetailPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { data } = useSWR(`https://dummyjson.com/products/${slug}`, fetcher);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);
  if (!data) return;
  const {
    id,
    title,
    description,
    price,
    rating,
    category,
    thumbnail,
    images,
    stock,
    brand,
  } = data;

  const categories = category.charAt(0).toUpperCase() + category.slice(1);
  const remainder = Math.round(5 % rating);
  const rate = Math.floor(rating);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName: title,
        image: thumbnail,
        price,
      })
    );
    toast.success("Product added successfully");
  };

  return (
    <div className="mt-[80px]">
      <div className="container">
        <div className="bg-primary w-full p-10 text-center text-white">
          <h3 className="text-[30px] font-medium">{categories}</h3>
          <div className="flex gap-x-2 items-center justify-center mt-5">
            <p>Home</p>
            <span>/</span>
            <p>{title}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 sm:gap-10 gap-[50px] justify-center w-full py-10 sm:px-[100px] px-5">
          <div className="flex overflow-hidden items-center justify-center">
            <Slider {...settings} className="slider-product-detail">
              {images.length > 0 &&
                images.map((item, index) => (
                  <div key={index} className="w-full h-full">
                    <img
                      src={item}
                      alt=""
                      className="w-[100%] h-[410px] overflow-hidden object-contain"
                    />
                  </div>
                ))}
            </Slider>
          </div>
          <div className="flex-1 flex flex-col gap-y-5">
            <h3 className="lg:text-[35px] md:text-[30px] sm:text-[28px] max-sm:text-[35px] font-semibold">
              {title}
            </h3>
            <div className="flex gap-x-3 items-center">
              <div className="flex gap-x-[2px]">
                {Array(rate)
                  .fill(0)
                  .map((star, index) => (
                    <span key={index} className="text-[#FFDE00]">
                      <ion-icon name="star"></ion-icon>
                    </span>
                  ))}
                {rate >= 4 && remainder <= 0 ? (
                  <span className="text-[#FFDE00]">
                    <ion-icon name="star-outline" clas></ion-icon>
                  </span>
                ) : (
                  ""
                )}
                {Array(remainder)
                  .fill(0)
                  .map((star, index) => (
                    <span key={index} className="text-[#FFDE00]">
                      <ion-icon name="star-half-outline"></ion-icon>
                    </span>
                  ))}
              </div>
              <p className="text-sm font-medium text-dark">(No reviews)</p>
            </div>
            <p className="text-2xl font-medium text-error">${price}</p>
            <div className="flex flex-col gap-y-[2px] text-primary text-sm font-medium">
              <p className="flex gap-x-1 items-center">
                <IconCheck></IconCheck>
                <span>In stock</span>
              </p>
              <p className="flex gap-x-1 items-center">
                <IconCheck></IconCheck>
                <span>Free delivery available</span>
              </p>
            </div>
            <p className="text-sm font-medium text-text1">{description}</p>
            <div className="flex max-md:flex-col gap-4">
              <button
                className="min-w-[200px] w-[250px] rounded-md py-4 bg-primary text-white font-medium"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
            <p className="text-sm flex gap-x-3 text-dark">
              <span className="font-semibold">Stock :</span>
              <span>{stock}</span>
            </p>
            <div className="flex gap-x-2 text-sm">
              <span className="font-semibold">Categories:</span>
              <span>{categories}</span>
            </div>
            <div className="flex gap-x-2 text-sm">
              <span className="font-semibold">Brand:</span>
              <span>{brand}</span>
            </div>
            <div className="text-sm font-semibold flex gap-x-5 items-center">
              <span>Share:</span>
              <div className="flex gap-x-2">
                {icons.map((icon, index) => (
                  <span
                    className="w-8 h-8 rounded-full bg-dark flex items-center justify-center socials"
                    key={index}
                  >
                    <img src={icon} alt="" className="w-[50%] h-[50%]" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 px-5">
          <Heading>Related Products</Heading>
          <SimilarProduct categories={category} id={id}></SimilarProduct>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
