import AnimatedShinyText from "../../../components/ui/animated-shiny-text"; 
import { FaShippingFast, FaShieldAlt, FaWhatsapp } from "react-icons/fa";

const footerItems = [
   {
      icon: <FaShippingFast className="text-[46px] text-[#fb9a00]" />,
      title: "Free Shipping",
      description: "Free orders with discounts."
   },
   {
      icon: <FaShieldAlt className="text-[46px] text-[#f24877]" />,
      title: "Security in every sense",
      description: "We generate 100% trust."
   },
   {
      icon: <FaWhatsapp className="text-[46px] text-[#1f6c76]" />,
      title: "Contact me",
      description: "I can advise you quickly."
   }
];

export default function FooterWelcome() {
   return (
      <div className="w-full flex justify-evenly gap-12 relative z-10">
         {footerItems.map((item, index) => (
            <div key={index} className="flex items-center rounded-2xl mt-10 px-10 py-5 shadow-gray-400 shadow-md gap-5 bg-[rgba(255,255,255,0.5)]">
               {item.icon}
               <div className="font-lato">
                  <AnimatedShinyText>
                     <div className="text-xl font-bold">{item.title}</div>
                     <div className="text-sm text-gray-500">{item.description}</div>
                  </AnimatedShinyText>
               </div>
            </div>
         ))}
      </div>
   );
}
