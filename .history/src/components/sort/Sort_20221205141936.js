import React, { useState } from "react";
import IconDown from "../../icons/IconDown";
import IconUp from "../../icons/IconUp";

const itemSort = [
  "Default",
  "Name - A to Z",
  "Name - Z to A",
  "Price - Low to High",
  "Price - High to Low",
];
const Sort = ({ onClick = () => {} }) => {
  const [showSort, setShowSort] = useState(false);
  const [changeIcon, setChangeIcon] = useState(false);
  const [changeSort, setChangeSort] = useState("Default");
  const handleShowSort = () => {
    setShowSort(!showSort);
    setChangeIcon(!changeIcon);
  };

  const handleChangeValueSort = (e) => {
    const value = e.target.textContent;
    setChangeSort(value);
    setShowSort(false);
  };

  return (
    <div className="relative">
      <h3 className="flex gap-x-2 items-center text-sm font-medium">
        <p>Sort by : </p>
        <p
          className="border min-w-[160px] py-2 px-3 cursor-pointer rounded-md flex justify-between items-center"
          onClick={handleShowSort}
        >
          <span className="select-none">{changeSort}</span>
          {changeIcon ? <IconDown></IconDown> : <IconUp></IconUp>}
        </p>
      </h3>
      {showSort && (
        <div className="flex flex-col gap-y-3 absolute right-0 py-3 px-4 mt-1 border rounded-md text-sm z-10 bg-white">
          {itemSort.map((item, index) => (
            <div onClick={handleChangeValueSort} key={index}>
              <span
                className="hover:text-primary cursor-pointer font-medium item-sort"
                onClick={onClick}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
