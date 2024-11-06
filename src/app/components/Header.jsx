// Header.jsx
"use client";

import { useCart } from './header/CartContext';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '../images/logo.png';
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { CiMenuKebab } from "react-icons/ci";
import NavLinks from './header/NavLiks';
import MobileMenu from './header/MobileMenu';
import AddCart from './header/AddCart';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isOpenCart, setOpenCart] = useState(false);
  const openCart = () => {
    setOpenCart(!isOpenCart);
  };

  const { cartItems } = useCart();

  return (
    <div className="h-[70px] fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto flex justify-around items-center">
        <Image
          className="w-24 m-1"
          src={Logo}
          alt="Logo"
        />
        <NavLinks/>
        <div className="flex gap-5 text-4xl">
          <HiOutlineUser className="text-[#fb9a00] cursor-pointer transition-all duration-300 hover:scale-150" />
          <div className="relative">
            <HiOutlineShoppingCart 
              className="text-[#f24877] cursor-pointer transition-all duration-300 hover:scale-150" 
              onClick={openCart}
            />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-white text-base font-bold rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </div>
          <div className="flex lg:hidden">
            <CiMenuKebab 
              onClick={toggleMenu} 
              className="text-[#1f6c76] cursor-pointer transition-all duration-300 hover:scale-150"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <MobileMenu/>
      )}
      {isOpenCart && (
        <AddCart/>
      )}
    </div>
  );
}
