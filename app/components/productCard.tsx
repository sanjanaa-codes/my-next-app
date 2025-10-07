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
      setShowControls(false);
      setCount(1);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-8 px-12 mt-20">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <Image
              src="/images/imagecardbanner.jpg"
              alt="Product Image"
              width={200}
              height={200}
              className="w-full h-auto cursor-pointer"
            />

            <div>
              <h5 className="text-base font-normal mt-2">RE Weather Jacket</h5>
              <p className="text-gray-600 truncate text-base font-medium mt-1">
                Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction
                Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy
                Handles
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 text-sm font-medium">4.1</span>
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        stroke="#FF5C00"
                        fill="#FF5C00"
                        size={16}
                      />
                    ))}
                  <span className="text-gray-500 text-sm font-medium">
                    1,234
                  </span>
                </div>
              </div>

              <div className="flex items-baseline space-x-2 mb-1">
                <p className="text-xl font-semibold text-gray-900">
                  <span className="text-xs align-text-top">₹</span>265
                  <span className="text-sm align-super">00</span>
                </p>
                <p className="text-sm text-gray-500">
                  M.R.P:{" "}
                  <span className="line-through text-gray-500">₹599</span>
                </p>
              </div>

              <div className="flex gap-1">
                <p className="text-sm text-gray-900 font-medium">
                  FREE Delivery
                </p>
                <div className="space-y-2">
                  {/* <DeliveryInfo type="prime" /> */}
                  {/* <DeliveryInfo type="range" date="8" endDate="12 Oct" /> */}
                  {/* <DeliveryInfo type="single" date="Wed, 8 October" /> */}
                   <DeliveryInfo
                    type="scheduled"
                    date="8 Oct"
                    time="8 am - 5 pm"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
