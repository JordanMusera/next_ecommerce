"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEventHandler } from "react";

const ProductList = () => {

  const router = useRouter();
  const viewProductFunction = (e:React.MouseEvent<HTMLDivElement>)=>{
    router.push('/product_view');
  }

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex w-full flex-col sm:w-[45%] lg:w-[22%] m-1" onClick={viewProductFunction}>
        <div className="relative w-full h-80 xl:h-50">
          {" "}
          {/* Added relative positioning and fixed height */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image"
            fill
            sizes="25vw"
            //sizes='(max-width: 600px) 45vw, 25vw'
            className="rounded-md"
          />
        </div>

        <div className="flex">
          <span className="font-medium">Product name</span>
          <span className="font-semibold">price</span>
        </div>
        <div className="text-gray-700 font-medium">Product description</div>
        <button className="px-2 w-max hover:bg-green-400 m-1 rounded-2xl border border-red-100">
          Add to cart
        </button>
      </div>

      <div className="flex flex-col w-full sm:w-[45%] lg:w-[22%] m-1">
        <div className="relative w-full h-80 xl:h-50">
          {" "}
          {/* Added relative positioning and fixed height */}
          <Image
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Product Image"
            fill
            sizes="25vw"
            //sizes='(max-width: 600px) 45vw, 25vw'
            className="rounded-md"
          />
        </div>

        <div className="flex">
          <span className="font-medium">Product name</span>
          <span className="font-semibold">price</span>
        </div>
        <div className="text-gray-700 font-medium">Product description</div>
        <button className="px-2 w-max hover:bg-green-400 m-1 rounded-2xl border border-red-100">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductList;
