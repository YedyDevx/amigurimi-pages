'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoFooter from '../images/ChepiCrochet-logo-2.png';
import Bancolombia from '../images/icons/icons-bancolombia.jpg';
import Nequi from '../images/icons/icons-nequi.jpg';
import Master from '../images/icons/icons-mastercard.png';
import Paypal from '../images/icons/icons-paypal.png';
import { MdEmail, MdPhoneAndroid, MdLocationPin } from "react-icons/md";
import { FaTiktok, FaFacebookF, FaInstagram, FaShippingFast } from "react-icons/fa";
import AnimatedShinyText from "../../components/ui/animated-shiny-text"
import Shadow from "./home/Shadow"

export default function Footer() {
   return (
      <>
        <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full relative ">
            <Shadow />
            <div className="w-full mx-auto  flex flex-col px-20 justify-around items-center flex-wrap relative pt-10 bg-white bg-opacity-50 text-gray-800 font-lato shadow-2xl">
               <div className='flex flex-col lg:flex-row gap-10 lg:gap-12 justify-between items-center max-w-[1500px]'>
                  <div className="flex flex-col items-center text-center">
                     <Image
                        src={LogoFooter}
                        alt="logo-footer"
                        width={200}
                        className="mb-4 p-2 bg-white rounded-2xl shadow-lg"
                     />
                     <p className="text-sm opacity-80">
                        Chepi Crochet - Handmade Creations
                     </p>
                  </div>

               {/* Contact */}
               <div className="flex flex-col items-center text-center gap-4 text-gray-800">
                  <h2 className="text-xl font-bold uppercase tracking-wide mb-2 border-b border-gray-300 pb-2">
                     Contact Me
                  </h2>
                  <div className="flex items-center gap-3">
                     <MdEmail className="text-2xl" />
                     <span className="hover:underline">chepicrochetmania@gmail.com</span>
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

               <div className="flex flex-col items-center text-center gap-4 text-gray-800">
                  <h2 className="text-xl font-bold uppercase tracking-wide mb-2 border-b border-gray-300 pb-2">
                     Social Networks
                  </h2>
                  <div className="flex items-center gap-3">
                     <FaTiktok className="text-2xl" />
                     <a href="https://www.tiktok.com/@chepidesign?_t=ZS-8vvNkC8gGsE&_r=1" className="hover:text-pink-400 transition-colors duration-200 hover:underline">
                        TikTok
                     </a>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaInstagram className="text-2xl" />
                     <a href="https://www.instagram.com/chepicrochet.co" className="hover:text-pink-400 transition-colors duration-200 hover:underline">
                        Instagram
                     </a>
                  </div>
                  <div className="flex items-center gap-3">
                     <FaFacebookF className="text-2xl" />
                     <a href="https://www.facebook.com/share/15JY1YZgQa/" className="hover:text-pink-400 transition-colors duration-200 hover:underline">
                        Facebook
                     </a>
                  </div>
               </div>

                  <div className="flex flex-col gap-3 items-center text-gray-800">
                     <h2 className="text-xl font-bold uppercase tracking-wide mb-3">Payment Methods</h2>
                     <div className="flex gap-5 bg-white p-3 rounded-xl shadow-lg">
                        <Image src={Bancolombia} alt="Bancolombia" width={50} height={50} className="rounded-full" />
                        <Image src={Nequi} alt="Nequi" width={50} height={50} className="rounded-full" />
                        <Image src={Master} alt="Mastercard" width={60} height={40} className="rounded-md" />
                        <Image src={Paypal} alt="Paypal" width={50} height={40} className="rounded-md" />
                     </div>
                     <div className="flex justify-center items-center rounded-2xl w-72 h-20 shadow-gray-400 shadow-md gap-3 bg-[rgba(255,255,255,0.5)]">
                        <FaShippingFast className="text-[42px] text-[#166c6f]" />
                        <div className="font-lato">
                           <AnimatedShinyText>
                              <div className="text-xl font-bold">Envios Gratis</div>
                              <div className="text-sm text-gray-500">Compra segura y confiable.</div>
                           </AnimatedShinyText>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="text-center pb-10 pt-10 xl:pt-5 text-gray-800 text-sm font-itim">
                  &copy; {new Date().getFullYear()} Chepi Crochet. All rights reserved.
               </div>
            </div>
         </motion.footer>
      </>
   );
}
