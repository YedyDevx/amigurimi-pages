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
     <div className="w-full p-4 bg-[#236e78] font-lato shadow-2xl ">
         <div className="container mx-auto flex flex-wrap justify-between gap-8 ">
            
            <div className='flex flex-col items-center'>
               <Image
                  src={LogoFooter}
                  alt='logo-footer'
                  width={130}
                  height={100}
                  className="mb-4 p-2 bg-white rounded-xl"
               />
               <p className="text-center text-sm opacity-75 text-gray-50">Chepi Crochet - Handmade Creations</p>
            </div>

            <div className='flex flex-col items-start gap-3 text-lg text-gray-50'>
               <h2 className='text-lg font-bold uppercase tracking-wide'>Contact me</h2>
               <div className='flex items-center gap-3'>
                  <MdEmail className="text-gray-50 text-2xl" />
                  <span>correo@chepicrochet.com</span>
               </div>
               <div className='flex items-center gap-3'>
                  <MdPhoneAndroid className="text-gray-50 text-2xl" />
                  <span>(+57) 315 4249690</span>
               </div>
               <div className='flex items-center gap-3'>
                  <MdLocationPin className="text-gray-50 text-2xl" />
                  <span>Colombia, Antioquia - Apartado.</span>
               </div>
            </div>

            <div className="flex flex-col items-start gap-3 text-lg text-gray-50">
               <h2 className='text-lg font-bold uppercase tracking-wide'>Social Networks</h2>
               <div className='flex items-center gap-3'>
                  <FaTiktok className="text-gray-100" />
                  <a href="#" className="hover:text-pink-500 transition-colors duration-200">
                     TikTok
                  </a>
               </div>
               <div className='flex items-center gap-3'>
                  <FaInstagram className="text-gray-50" />
                  <a href="#" className="hover:text-pink-500 transition-colors duration-200">
                     Instagram
                  </a>
               </div>
               <div className='flex items-center gap-3'>
                  <FaFacebookF className="text-gray-50" />
                  <a href="#" className="hover:text-pink-500 transition-colors duration-200">
                     Facebook
                  </a>
               </div>
            </div>
            <div className='flex flex-col items-center'>
               <h2 className='text-lg font-bold uppercase tracking-wide mb-3 text-gray-50'>Payment Methods</h2>
               <div className='flex gap-5 bg-white p-2 rounded-xl'>
                  <Image src={Bancolombia} alt='Bancolombia' width={60} height={60} />
                  <Image src={Nequi} alt='Nequi' width={60} height={60} />
                  <Image src={Master} alt='Mastercard' width={80} height={20}/>
                  <Image src={Paypal} alt='Paypal' width={60} height={40} />
               </div>
            </div>
         </div>
         <div className="text-center text-gray-50 font-itim">
            &copy; {new Date().getFullYear()} Chepi Crochet. All rights reserved.
         </div>
     </div>
   );
}
