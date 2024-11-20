'use client'
import { motion } from "framer-motion"
import Image from 'next/image';
import ImgFondo from '../../images/fondo.jpg';
import Shadow from './Shadow';
import Welcome from './Welcome';

export default function SectionInicio() {
   return (
      <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }} 
      className="2xl:max-w-[1200px] flex justify-center w-full m-auto relative mt-24 px-4 sm:px-6 lg:px-8">
         <Shadow/>
         <div className="w-[1200px] h-[520px] bg-[rgba(255,255,255,0.5)] shadow-lg shadow-[rgba(0,0,0,0.5)] relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-center">
            <div className="hidden lg:block w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-full relative">
               <Image
                  className="object-cover w-full h-full "
                  src={ImgFondo}
                  alt="Imagen de Bienvenida"
               />
            </div>
            <Welcome/>
         </div>
      </motion.div>
   );
}
