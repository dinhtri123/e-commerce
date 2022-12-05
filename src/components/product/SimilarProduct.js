import React from "react";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
import Card from "../card/Card";

const SimilarProduct = ({categories, id}) => {
  const { data } = useSWR(
    `https://dummyjson.com/products/category/${categories}`,
    fetcher
  );
  if (!data) return;
  const product = data.products;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 py-5 mb-[50px] similar-product">
      {product.filter(product => {
        return product.id !== id;
      }).map((item,index) => (
        <Card item={item} key={index}></Card>
      ))}
    </div>
  );
};

export default SimilarProduct;
