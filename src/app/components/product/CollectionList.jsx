import { FaDragon, FaPalette, FaUserCheck, FaCross, FaCat } from "react-icons/fa";
import { GiCarKey } from "react-icons/gi";
import { IoFlowerSharp } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidCameraMovie } from "react-icons/bi";
import { TbChristmasTree } from "react-icons/tb";
import { SiMarvelapp } from "react-icons/si";

const CollectionItems = [
   { icon: <AiOutlineProduct className="text-[46px] text-[#1f6c76]" />, category: "Todos", description: "Todos los productos." },
   { icon: <BiSolidCameraMovie className="text-[46px] text-[#1f6c76]" />, category: "Personajes", description: "De series y películas." },
   { icon: <FaDragon className="text-[46px] text-[#1f6c76]" />, category: "Anime", description: "Personajes de Animes." },
   { icon: <SiMarvelapp className="text-[46px] text-[#1f6c76]" />, category: "Héroes", description: "Personajes de Héroes." },
   { icon: <FaPalette className="text-[46px] text-[#1f6c76]" />, category: "Artistas", description: "Artistas personalizados." },
   { icon: <IoFlowerSharp className="text-[46px] text-[#1f6c76]" />, category: "Flores", description: "Todas las flores." },
   { icon: <GiCarKey className="text-[46px] text-[#1f6c76]" />, category: "Llaveros", description: "Llaveros personalizados." },
   { icon: <FaUserCheck className="text-[46px] text-[#1f6c76]" />, category: "Retratos", description: "Retratos personalizados." },
   { icon: <TbChristmasTree className="text-[46px] text-[#1f6c76]" />, category: "Navidad", description: "Amigurumis navideños." },
   { icon: <FaCross className="text-[46px] text-[#1f6c76]" />, category: "Religión", description: "Amigurumis religiosos." },
   { icon: <FaCat className="text-[46px] text-[#1f6c76]" />, category: "Animales", description: "Animalitos." },
];

export default function CollectionList () {
   return(
      <div className="flex flex-wrap justify-center gap-5">
            {CollectionItems.map((item, index) => (
               <CollectionItem 
                  key={index} 
                  item={item} 
                  onClick={() => {
                     setSelectedCategory(item.category);
                     setCurrentPage(1); 
                  }}
               />
            ))}
         </div>
   )
}