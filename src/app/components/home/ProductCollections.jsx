import AnimatedShinyText from "../../../components/ui/animated-shiny-text"; 
import { FaDragon, FaPalette, FaLink, FaCogs } from "react-icons/fa";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi"
import { SiMarvelapp } from "react-icons/si";

const CollectionItems = [
   {
      icon: <AiOutlineProduct className="text-[46px] text-[#1f6c76]" />,
      title: "Todos",
      description: "Todos los productos."
   },
   {
      icon: <BiSolidCameraMovie className="text-[46px] text-[#1f6c76]" />,
      title: "Caricaturas",
      description: "De series y peliculas."
   },
   {
      icon: <FaDragon className="text-[46px] text-[#1f6c76]" />,
      title: "Anime",
      description: "Personajes de Animes."
   },
   {
      icon: <SiMarvelapp  className="text-[46px] text-[#1f6c76]" />,
      title: "Heroes",
      description: "Personajes de Heroes."
   },
   {
      icon: <FaPalette className="text-[46px] text-[#1f6c76]" />,
      title: "Artistas",
      description: "Artistas personalizados."
   },
   {
      icon: <IoFlowerSharp className="text-[46px] text-[#1f6c76]" />,
      title: "Flores",
      description: "Todas las flores."
   },
   {
      icon: <FaLink className="text-[46px] text-[#1f6c76]" />,
      title: "Llaveros",
      description: "Llaveros personalizados."
   },
   {
      icon: <FaCogs className="text-[46px] text-[#1f6c76]" />,
      title: "Personalizados",
      description: "Amigurimis personalizados."
   },
];

export default function Collections () {
   return ( 
      <>
         <div className="max-w-[1500px] mx-auto flex flex-wrap mt-12  justify-center gap-5">
            {CollectionItems.map((item, index) => (
               <div 
                  key={index} 
                  className="flex items-center rounded-2xl cursor-pointer w-72 h-20 justify-center shadow-gray-400 shadow-md gap-5  bg-[rgba(255,255,255,0.5)]  hover:bg-[#1f6c765b] transition duration-300 ease-in-out"
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

