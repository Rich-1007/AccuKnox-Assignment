import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";

const NoData = () => {
  return (
    <>
      <div className="h-[210px] w-[340px]  flex flex-col  items-center justify-center">
        <BsGraphUpArrow className="text-gray-400" size={35} />

        <span className="text-sm text-gray-500">No Graph data avaliable!</span>
      </div>
    </>
  );
};

export default NoData;
