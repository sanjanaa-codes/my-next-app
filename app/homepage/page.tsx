"use client";
import { useState } from "react";
import ProductCard from "../components/productCard";

export default function HomePage() {
  const [name, setName] = useState("Sanjanaa");
  function handleClick() {
    setName("R J Sanjanaa");
  }
  const [light, setLightOn] = useState(true);
  function handleLight() {
    setLightOn(prevLightOn => !prevLightOn);
  }
  return (
    <>
      <ProductCard />
      <h3 className="mt-2">
        {" "}
        I am{" "}
        <button onClick={handleClick} className="cursor-pointer">
          {name}
        </button>
      </h3>
      <button onClick={handleLight}>Click here {light ? "to turn off the light" : "to turn on the light"}</button>
    </>
  );
}
