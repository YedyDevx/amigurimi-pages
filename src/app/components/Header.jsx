import Link from "next/link";
import Image from 'next/image';
import Logo from '../images/logo.png';
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

export default function Header() {
  return (
    <div className="h-[70px] fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto flex justify-around items-center">
        <Image
          className="w-24 m-1"
          src={Logo}
          alt="Logo"
        />
        <nav className="flex gap-12 font-lato text-lg text-[#1f6c76] font-bold">
          <Link 
            className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]"
            href="/">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            className="relative group transition duration-300 ease-in-out hover:text-[#f24877]"
            href="/pages/products">
            Productos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link 
            className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]"
            href="/pages/about">
            Sobre mi
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            className="relative group transition duration-300 ease-in-out hover:text-[#f24877]"
            href="/pages/contact">
            Contacto
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <div className="flex gap-5 text-4xl">
          <HiOutlineUser className="text-[#fb9a00] cursor-pointer transition-all duration-300 hover:scale-150" />
          <HiOutlineShoppingCart className="text-[#f24877] cursor-pointer transition-all duration-300 hover:scale-150" />
        </div>
      </div>
    </div>
  );
}
