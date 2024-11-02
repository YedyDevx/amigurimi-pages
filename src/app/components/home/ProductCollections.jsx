import AnimatedShinyText from "../../../components/ui/animated-shiny-text"; 
import { FaDragon, FaPalette, FaLink, FaCogs } from "react-icons/fa";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";

const CollectionItems = [
   {
      icon: <AiOutlineProduct className="text-[46px] text-[#fb9a00]" />,
      title: "All Products",
      description: "Free orders with discounts."
   },
   {
      icon: <BiSolidCameraMovie className="text-[46px] text-[#fb9a00]" />,
      title: "Movie",
      description: "Movie Characters."
   },
   {
      icon: <FaDragon className="text-[46px] text-[#fb9a00]" />,
      title: "Anime",
      description: "Anime Characters."
   },
   {
      icon: <FaPalette className="text-[46px] text-[#fb9a00]" />,
      title: "Art",
      description: "Amigurimis inspired by art."
   },
   {
      icon: <IoFlowerSharp className="text-[46px] text-[#fb9a00]" />,
      title: "Flowers",
      description: "Crochet flowers."
   },
   {
      icon: <FaLink className="text-[46px] text-[#fb9a00]" />,
      title: "Keychains",
      description: "Crochet keychains."
   },
   {
      icon: <FaCogs className="text-[46px] text-[#fb9a00]" />,
      title: "Custom Characters",
      description: "Anything personalized."
   },
];
export default function Collections () {
   return ( 
      <>
         <div id="allproducts" className="text-3xl mx-12 my-3 font-lato font-bold text-[#1f6c76]">Collections:</div>
         <div className="w-full flex flex-wrap justify-center gap-5">
            {CollectionItems.map((item, index) => (
               <div 
                  key={index} 
                  className="flex items-center rounded-2xl cursor-pointer px-10 py-5 shadow-gray-400 shadow-md gap-5 bg-[rgba(255,255,255,0.5)] 
                             hover:bg-[#ffc4656b] transition duration-300 ease-in-out"
               >
                  {item.icon}
                  <div className="font-lato">
                     <AnimatedShinyText>
                        <div className="text-xl font-bold">{item.title}</div>
                        <div className="text-gray-500 font-itim">{item.description}</div>
                     </AnimatedShinyText>
                  </div>
               </div>
            ))}
         </div>
      </>
   );
}

