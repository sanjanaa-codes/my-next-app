import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul className="flex gap-4">
        <li><Link href="/homepage">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contactus">Contact</Link></li>
      </ul>
    </div>
  );
}
