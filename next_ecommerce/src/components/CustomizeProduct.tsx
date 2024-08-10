"use client"
import React from "react";

const CustomizeProduct = () => {
  return (
    <div>
      <h2 className="font-semibold text-lg my-2">Choose color</h2>
      <ul className="flex gap-5 items-center">
        <li className="h-8 w-8 rounded-full bg-red-500 relative">
          <div className="absolute h-10 w-10 rounded-full border border-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>

        <li className="h-8 w-8 rounded-full bg-blue-500 relative" />

        <li className="h-8 w-8 rotate-45 rounded-full bg-green-500 cursor-not-allowed relative">
          <div className="absolute h-[2px] cursor-not-allowed w-10 rounded-full bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>

      <h2 className="font-semibold text-lg my-2">Choose a size</h2>
      <ul className="flex gap-5 items-center">
        <li className="h-max p-2 w-25 rounded-md bg-pink-500">
          Small
        </li>
        <li className="h-max p-2 w-25 rounded-md bg-pink-500">
          Medium
        </li>
        <li className="h-max p-2 w-25 rounded-md bg-pink-500">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProduct;
