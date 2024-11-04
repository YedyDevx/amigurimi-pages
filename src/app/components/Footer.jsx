import Image from 'next/image';
import LogoFooter from '../images/ChepiCrochet-logo-2.png';
import Bancolombia from '../images/icons/icons-bancolombia.jpg';
import Nequi from '../images/icons/icons-nequi.jpg';
import Master from '../images/icons/icons-mastercard.png';
import Paypal from '../images/icons/icons-paypal.png';
import { MdEmail, MdPhoneAndroid, MdLocationPin } from "react-icons/md";
import { FaTiktok, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
   return (
     <footer className="w-full bg-gradient-to-r from-[#136d75] to-[#0f545e] text-white py-5 font-lato shadow-2xl">
       <div className="container mx-auto px-6 flex flex-wrap gap-10 lg:gap-12 justify-between items-start">

         <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image
               src={LogoFooter}
               alt="logo-footer"
               width={160}
               height={80}
               className="mb-4 p-2 bg-white rounded-2xl shadow-lg"
            />
            <p className="text-sm opacity-80 text-gray-100">
               Chepi Crochet - Handmade Creations
            </p>
         </div>

         <div className="flex flex-col gap-4 text-gray-100">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-2 border-b border-gray-300 pb-2">Contact Me</h2>
            <div className="flex items-center gap-3">
               <MdEmail className="text-2xl" />
               <span className="hover:underline">correo@chepicrochet.com</span>
            </div>
            <div className="flex items-center gap-3">
               <MdPhoneAndroid className="text-2xl" />
               <span>(+57) 315 4249690</span>
            </div>
            <div className="flex items-center gap-3">
               <MdLocationPin className="text-2xl" />
               <span>Colombia, Antioquia - Apartado</span>
            </div>
         </div>

         <div className="flex flex-col gap-4 text-gray-100">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-2 border-b border-gray-300 pb-2">Social Networks</h2>
            <div className="flex items-center gap-3">
               <FaTiktok className="text-2xl" />
               <a href="#" className="hover:text-pink-400 transition-colors duration-200 hover:underline">TikTok</a>
            </div>
            <div className="flex items-center gap-3">
               <FaInstagram className="text-2xl" />
               <a href="#" className="hover:text-pink-400 transition-colors duration-200 hover:underline">Instagram</a>
            </div>
            <div className="flex items-center gap-3">
               <FaFacebookF className="text-2xl" />
               <a href="#" className="hover:text-pink-400 transition-colors duration-200 hover:underline">Facebook</a>
            </div>
         </div>

         <div className="flex flex-col items-center md:items-start text-gray-100">
            <h2 className="text-xl font-bold uppercase tracking-wide mb-3">Payment Methods</h2>
            <div className="flex gap-5 bg-white p-3 rounded-xl shadow-lg">
               <Image src={Bancolombia} alt="Bancolombia" width={50} height={50} className="rounded-full" />
               <Image src={Nequi} alt="Nequi" width={50} height={50} className="rounded-full" />
               <Image src={Master} alt="Mastercard" width={60} height={40} className="rounded-md" />
               <Image src={Paypal} alt="Paypal" width={50} height={40} className="rounded-md" />
            </div>
         </div>
       </div>

       <div className="text-center mt-5 text-gray-100 text-sm font-itim">
         &copy; {new Date().getFullYear()} Chepi Crochet. All rights reserved.
       </div>
     </footer>
   );
}
