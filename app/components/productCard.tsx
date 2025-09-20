import Image from "next/image";

export default function ProductCard() {
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
    </div>
  );
}
