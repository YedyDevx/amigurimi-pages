import Link from "next/link";
import Image from 'next/image'
import Logo from '../images/logo.png'
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi"


export default function Header() {
  return (
    <div className="w-full h-20">
      <div className="flex justify-around items-center"> 
        <Image
          className="w-24 mt-1"
          src={Logo}
          alt="Logo"
        />
        <nav className="flex gap-12 uppercase">
          <Link href="/">Start</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex gap-5 text-4xl">
          <HiOutlineShoppingCart className="text-[#f24877] cursor-pointer  transition-all duration-300 hover:scale-150" />
          <HiOutlineUser className="text-[#f24877] cursor-pointer  transition-all duration-300 hover:scale-150" />
        </div>
      </div>
    </div>
  );
}
