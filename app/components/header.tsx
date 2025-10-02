"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  let san = 1;
  console.log("Pathname:", pathname);
  const [count, setCount] = useState(0);
  console.log("Count:", count);
  console.log("San:", san);
  return (
    <div>
      <ul className="flex gap-6 bg-black justify-center p-[30px]">
        <li className="text-white text-2xl">
          <Link
            href="/homepage"
            className={pathname === "/homepage" ? "font-semibold" : ""}
          >
            Home
          </Link>
        </li>
        <li className="text-white text-2xl">
          <Link
            href="/about"
            className={pathname === "/about" ? "font-semibold" : ""}
          >
            About
          </Link>
        </li>
        <li className="text-white text-2xl">
          <Link
            href="/contactus"
            className={pathname === "/contactus" ? "font-semibold" : ""}
          >
            Contact
          </Link>
        </li>
        <li className="text-white text-2xl">
          <p>
            Help <span>{san}</span>
          </p>
          <button
            onClick={() => (san = 2)}
            className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
          >
            san
          </button>
        </li>
        <li className="text-white text-2xl">
          <p>
            Help <span>{count}</span>
          </p>
          <button
            onClick={() => setCount(2)}
            className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
          >
            count
          </button>
        </li>
      </ul>
    </div>
  );
}
