import React from "react";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
import Card from "../card/Card";

const SimilarProduct = ({categories, id}) => {
  
  const { data } = useSWR(
    `http://localhost:8080/api/category/getProductByCate?nameCategory=${categories}&pageNumber=0&pageSize=10`,
    fetcher
  );
  if (!data) return;
  const product = data?.content;
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 py-5 mb-[50px] similar-product">
      {product.map((item,index) => (
        <Card item={item} key={index}></Card>
      ))}
    </div>
  );
};

export default SimilarProduct;
