import React, { useState } from "react";
import useSWR from "swr";
import { fetcher } from "../../apiConfig";
import IconMinus from "../../icons/IconMinus";
import IconPlus from "../../icons/IconPlus";

const CategoryShop = ({onClick = () => {}}) => {
  const { data } = useSWR(`https://dummyjson.com/products/categories`, fetcher);
  const [showCategories, setShowCategories] = useState(false);

  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };

  if (!data) return;
  
  return (
    <div className="relative w-[200px]">
      <h3
        className=" w-full flex items-center justify-between border rounded-md px-5 py-2 text-sm font-semibold text-dark cursor-pointer"
        onClick={handleShowCategories}
      >
        <span className="select-none">Categories</span>
        <span>
          {showCategories ? <IconMinus className={"w-4 h-4"}></IconMinus> : <IconPlus className={"w-4 h-4"}></IconPlus>}
        </span>
      </h3>
      {showCategories && (
        <div className="absolute left-0 border w-full h-[400px] overflow-y-scroll mt-1 rounded-md bg-white z-10 py-3 categories-item">
          {data.length > 0 &&
            data.map((category, index) => (
              <p
                className="flex gap-x-2 text-sm items-center py-2 px-5 text-dark font-medium cursor-pointer hover:text-primary"
                key={index}
              >
                <span onClick={onClick}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryShop;
