"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import PulsatingButton from "../../components/ui/pulsating-button";

export default function BtnWs() {
   const [hovered, setHovered] = useState(false);
   const whatsappNumber = "+573017317519";
   const message = "Hola, vengo de tu página Chepicrochet y me gustaría tener más asesoramiento.";

   const encodedMessage = encodeURIComponent(message);
   
   return (
      <div className="fixed bottom-5 right-5 z-50">
         <div 
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
         >
            {hovered && (
               <span className="absolute -top-6 -right-20 transform -translate-x-1/2 text-white font-lato text-xs font-semibold p-2 rounded-lg shadow-lg">
                  <PulsatingButton>Contactate Conmigo</PulsatingButton>
               </span>
            )}
               <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
               <button 
                  className="text-5xl text-white bg-[#31ba46] rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl"
                  aria-label="Contactar por WhatsApp"
               >
                  <FaWhatsapp />
               </button>
               </a>
         </div>
      </div>
   );
}
