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
      <div className="w-full flex justify-evenly gap-2 relative z-10 flex-wrap mt-10">
         {footerItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center rounded-2xl  w-80 h-20  shadow-gray-400 shadow-md gap-3 bg-[rgba(255,255,255,0.5)]">
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
