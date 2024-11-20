'use client';
import { motion } from 'framer-motion';
import AnimatedShinyText from "../../../components/ui/animated-shiny-text"; 
import { FaShippingFast, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

const footerItems = [
   {
      icon: <FaShippingFast className="text-[46px] text-[#fb9a00]" />,
      title: "Envío gratis",
      description: "Pedidos gratuitos y con descuentos."
   },
   {
      icon: <FaShieldAlt className="text-[46px] text-[#f24877]" />,
      title: "Compra 100% segura.",
      description:"Tu compra es segura y confiable."
   },
   {
      icon: <FaWhatsapp className="text-[46px] text-[#1f6c76]" />,
      title: "Contáctenos",
      description: "Puedo asesorarte rápidamente."
   }
];

export default function FooterWelcome() {
   return (
      <div
      className="max-w-[1500px] mx-auto flex justify-evenly gap-2 relative z-10 flex-wrap mt-10">
         {footerItems.map((item, index) => (
            <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2}}
            className="flex justify-center items-center rounded-2xl  w-80 h-20  shadow-gray-400 shadow-md gap-3 bg-[rgba(255,255,255,0.5)]">
               {item.icon}
               <div className="font-lato">
                  <AnimatedShinyText>
                     <div className="text-xl font-bold">{item.title}</div>
                     <div className="text-sm text-gray-500">{item.description}</div>
                  </AnimatedShinyText>
               </div>
            </motion.div>
         ))}
      </div>
   );
}
