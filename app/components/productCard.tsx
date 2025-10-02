'use client';
import Image from "next/image";
import { useState } from "react";

export default function ProductCard() {
  const [name, setName] = useState("Sanjanaa");
  return (
    <div>
      <Image
        src="/images/imagecardbanner.jpg"
        alt="Product Image"
        width={200}
        height={200}
      />
      <h2>Image Card Banner</h2>
      <p>$19.99</p>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        onClick={() => setName("saanj")}
      >
        Click Me {name}
      </button>
    </div>
  );
}
