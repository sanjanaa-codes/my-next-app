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
  const data = [
    {
      id: 1,
      imageSrc: "/images/imagecardbanner.jpg",
      title: "RE Weather Jacket1",
      desc:"Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy Handles",
      price: "265",
    },
    {
      id: 2,
      imageSrc: "/images/imagecardbanner.jpg",
      title: "RE Weather Jacket2",
      desc:"Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy Handles",
      price: "275",
    },
    {
      id: 3,
      imageSrc: "/images/imagecardbanner.jpg",
      title: "RE Weather Jacket3",
      desc:"Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy Handles",
      price: "25",
    },
  ];

  return (
    <div className="flex gap-2">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col gap-1 px-12 mt-20">
          <Image
            src={item.imageSrc}
            alt="Product Image"
            width={400}
            height={400}
            className="h-auto cursor-pointer"
          />

          <div className="w-[400px]">
            <h5 className="text-base font-normal mt-2">{item.title}</h5>
            <p className="text-gray-600 truncate text-base font-medium mt-1">
              {item.desc}
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
                <span className="text-gray-500 text-sm font-medium">1,234</span>
              </div>
            </div>

            <div className="flex items-baseline space-x-2 mb-1">
              <p className="text-xl font-semibold text-gray-900">
                <span className="text-xs align-text-top">₹</span>{item.price}
                <span className="text-sm align-super">00</span>
              </p>
              <p className="text-sm text-gray-500">
                M.R.P: <span className="line-through text-gray-500">₹599</span>
              </p>
            </div>

            <div className="flex gap-1">
              <p className="text-sm text-gray-900 font-medium">FREE Delivery</p>
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
    //
  );
}
