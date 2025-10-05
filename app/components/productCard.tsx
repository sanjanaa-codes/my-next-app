"use client";

import StarIcon from "@/public/icons/star";
import Image from "next/image";
import DeliveryInfo from "./deliveryInfo";
import Plus from "@/public/icons/plus";
import TrashIcon from "@/public/icons/trash";
import Cart from "@/public/icons/cart";
import { useState } from "react";

export default function ProductCard() {
  const [showControls, setShowControls] = useState(false);
  const [count, setCount] = useState(1);

  const handlePlus = () => setCount((prev) => prev + 1);

  const handleMinus = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    } else {
      // If count is 1, show trash instead
      setShowControls(false);
      setCount(1);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-8 px-12 mt-20">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          // why  key
          <div key={i}>
            <Image
              key={i}
              src="/images/imagecardbanner.jpg"
              alt="Product Image"
              width={200}
              height={200}
              className="w-full h-auto cursor-pointer"
            />
            <div>
              <h5 className="text-base font-normal mt-2">RE Weather Jacket</h5>
              {/* truncate */}
              <p className="text-gray-600 truncate text-base font-medium mt-1">
                Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction
                Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy
                Handles
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-600 text-sm font-medium">4.1</span>
                {/* this method */}
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <StarIcon
                      key={i}
                      stroke="#FF5C00"
                      fill="#FF5C00"
                      size={16}
                      className="mb-1"
                    />
                  ))}
                <span className="text-gray-500 text-sm font-medium">1,234</span>
              </div>
              {/* items-baseline */}
              <div className="flex items-baseline space-x-2 mb-1">
                <p className="text-xl font-semibold text-gray-900">
                  {/* align-text-top align-super */}
                  <span className="text-xs align-text-top">₹</span>265
                  <span className="text-sm align-super">00</span>
                </p>
                <p className="text-sm text-gray-500">
                  M.R.P: {/* {" "} */}
                  {/* line-through */}
                  <span className="line-through text-gray-500">₹599</span>
                </p>
              </div>
              <div className="flex gap-1">
                <p className="text-sm text-gray-900 font-medium">
                  FREE Delivery
                </p>
                {/* <p className="text-sm font-semibold text-gray-900">Wed, 8 October</p> */}
                <div className="space-y-2">
                  {/* <DeliveryInfo type="single" date="Wed, 8 October" /> */}
                  {/* <DeliveryInfo type="range" date="8" endDate="12 Oct" /> */}
                  <DeliveryInfo type="prime" />
                  {/* <DeliveryInfo
                    type="scheduled"
                    date="8 Oct"
                    time="8 am - 5 pm"
                  /> */}
                </div>
              </div>
              {/* <Cart size={20} className="mt-5 cursor-pointer" />
              <div className="flex items-center gap-4 mt-2">
                <Image
                  src="/images/minus.png"
                  alt="Minus Icon"
                  width={80}
                  height={20}
                  className="h-5 w-auto cursor-pointer"
                />
                <TrashIcon size={20} fill="#000" className="cursor-pointer" />

                <Plus size={20} className="cursor-pointer" />
              </div> */}
              <div className="flex flex-col items-center">
                {/* Cart icon */}
                <button onClick={() => setShowControls((prev) => !prev)}>
                <Cart
                  size={24}
                  className="mt-5 cursor-pointer"
                />
                </button>
                

                {/* Controls (appear when cart clicked) */}
                {showControls && (
                  <div className="flex items-center gap-4 mt-2">
                    {count === 1 ? (
                      <button onClick={() => setShowControls(false)}>
                        <TrashIcon
                          size={22}
                          className="cursor-pointer"
                          
                        />
                      </button>
                    ) : (
                      <Image
                        src="/images/minus.png"
                        alt="Minus Icon"
                        width={80}
                        height={20}
                        className="h-5 w-auto cursor-pointer"
                        onClick={handleMinus}
                      />
                    )}
                    ) : (
                      <Image
                        src="/images/minus.png"
                        alt="Minus Icon"
                        width={80}
                        height={20}
                        className="h-5 w-auto cursor-pointer"
                        onClick={handleMinus}
                      />
                    )}

                    <p className="text-base font-semibold">{count}</p>
                    <button onClick={handlePlus}><Plus
                      size={22}
                      className="cursor-pointer"
                      
                    /></button>
                    
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
