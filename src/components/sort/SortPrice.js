import React, { useState } from "react";
import IconMinus from "../../icons/IconMinus";
import IconPlus from "../../icons/IconPlus";
const listPriceSort = [
  "Less than $50",
  "$50 - $100",
  "$100 - $200",
  "$200 - $500",
  "$500 - $1000",
  "More than $1000",
];
const SortPrice = ({onClick = () => {}}) => {
  // const [checkbox, setCheckbox] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  // const handleCheckCategories = () => {
  //   setCheckbox(!checkbox);
  // };
  const handleShowCategories = () => {
    setShowCategories(!showCategories);
  };
  return (
    <div className="relative w-[200px]">
      <h3
        className=" w-full flex items-center justify-between border rounded-md px-5 py-2 text-sm font-semibold text-dark cursor-pointer"
        onClick={handleShowCategories}
      >
        <span className="select-none">Price</span>
        <span>
          {showCategories ? <IconMinus></IconMinus> : <IconPlus></IconPlus>}
        </span>
      </h3>
      {showCategories && (
        <div className="absolute left-0 border w-full mt-1 py-2 rounded-md bg-white z-10">
          <p
            className="flex flex-col gap-y-2 text-sm items-start py-2 pl-5 text-dark font-medium cursor-pointer"
            // onClick={handleCheckCategories}
          >
            {listPriceSort.length > 0 &&
              listPriceSort.map((item, index) => <h3 key={index} className="hover:text-primary" onClick={onClick}>{item}</h3>)}
          </p>
        </div>
      )}
    </div>
  );
};

export default SortPrice;
