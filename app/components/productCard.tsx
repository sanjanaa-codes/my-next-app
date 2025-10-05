"use client";

import StarIcon from "@/public/icons/star";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="grid grid-cols-3 gap-8 px-12 mt-20">
      {Array(9)
        .fill(0)
        .map((_, i) => (
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
              <p className="text-gray-600 truncate text-base font-medium mt-1">
                Prestige Omega Select Plus 27.5cm Non-Stick Omni Tawa |Induction
                Base |Gas & Induction Compatible| Metal Spoon Friendly | Sturdy
                Handles
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-600 text-sm font-medium">4.1</span>
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
                <span className="text-gray-600 text-sm font-medium">1,234</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
