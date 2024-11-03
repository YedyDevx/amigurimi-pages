import Image from 'next/image';
import ImgFondo from '../../images/fondo.jpg';
import ImgLogo from '../../images/ChepiCrochet-logo-1.png';

export default function SectionInicio() {
   return (
      <div className="2xl:max-w-[1200px] flex justify-center w-full m-auto relative mt-24 px-4 sm:px-6 lg:px-8">
         <span className="absolute top-44 left-32 shadow-[0px_0px_150px_150px_#1f6c76]" />
         <span className="absolute right-48 bottom-28 shadow-[0px_0px_150px_150px_#fb9a00]" />
         <span className="absolute right-[530px] top-52 shadow-[0px_0px_150px_200px_#b4eee8]" />
         <span className="absolute top-[350px] left-[400px] shadow-[0px_0px_120px_180px_#f24877]" />

         <div className="w-[1200px] h-[520px] bg-[rgba(255,255,255,0.5)] shadow-lg shadow-[rgba(0,0,0,0.5)] relative rounded-3xl overflow-hidden flex flex-col lg:flex-row items-center justify-center">
            <div className="w-full lg:w-1/2 h-[250px] sm:h-[400px] lg:h-full relative">
               <Image
                  className="object-cover w-full h-full"
                  src={ImgFondo}
                  alt="Imagen de Bienvenida"
               />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left relative">
               <Image
                  className="w-30 sm:w-52 lg:w-60"
                  src={ImgLogo}
                  alt="Logo Chepi Crochet"
               />
               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-lato text-[#1f6c76] mb-4 absoulte">
                  Bienvenidos
               </h1>
               <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-itim mb-8 lg:mb-12">
                  Todo hecho a mano con amor y dedicación, para ti.
               </p>
               <a
                  className="text-lg sm:text-xl font-lato font-bold text-[#1f6c76] border-2 border-[#1f6c76] px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:bg-[#1f6c76] hover:text-white hover:shadow-lg hover:-translate-y-1"
                  href="#"
               >
                  Ver productos
               </a>
            </div>
         </div>
      </div>
   );
}
