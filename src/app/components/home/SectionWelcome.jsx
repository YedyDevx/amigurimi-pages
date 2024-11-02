import Image from 'next/image';
import ImgFondo from '../../images/fondo.jpg';
import ImgLogo from '../../images/ChepiCrochet-logo-1.png'

export default function SectionInicio() {
   return (
      <div className="max-w-[1200px] m-auto relative mt-24">
         <span
            className="absolute top-44 left-32 shadow-[0px_0px_150px_150px_#1f6c76]"
         />
         <span
            className="absolute right-48 bottom-28 shadow-[0px_0px_150px_150px_#fb9a00]"
         />
         <span
            className="absolute right-[530px] top-52 shadow-[0px_0px_150px_200px_#b4eee8]"
         />
         <span
            className="absolute top-[350px] left-[400px] 
            shadow-[0px_0px_120px_180px_#f24877]"
         />
         <div className="w-full h-[500px] bg-[rgba(255,255,255,0.5)] shadow-lg shadow-[rgba(0,0,0,0.5)] relative rounded-3xl overflow-hidden flex items-center justify-center">
      
            <div className="w-1/2 relative">
               <Image
                  className="object-cover w-full h-full"
                  src={ImgFondo}
                  alt="Imagen de Bienvenida"
               />
            </div>
         
            <div className="w-1/2 flex flex-col items-center justify-center">
               <Image
                  className="w-72 mb-60 relative"
                  src={ImgLogo}
                  alt="Imagen de Bienvenida"
               />
               <h1 className="text-6xl font-bold font-lato text-[#1f6c76] mb-2 absolute">Bienvenidos</h1>
               <p className="text-lg text-gray-700 text-center font-itim absolute mt-24">Todo hecho a mano con amor y dedicación, para ti.</p>
               <a
               class="text-xl font-lato font-bold text-[#1f6c76] border-2 border-[#1f6c76] px-6 py-3 rounded-full absolute mt-60 transition-all duration-300 hover:bg-[#1f6c76] hover:text-white hover:shadow-lg hover:-translate-y-1"
               href=""
               >
               Ver productos
               </a>

            </div>
         </div>
      </div>
   );
}
