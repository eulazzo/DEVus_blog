import React from "react";
import Link from "next/link";

const PaginationButton = ({ btnValue }) => {
  return (
    <div
      className="flex flex-col justify-center 
  text-center border-2 h-10 w-10 cursor-pointer  text-base"
    >
       
      {btnValue}
    </div>
  );
};

export default PaginationButton;
