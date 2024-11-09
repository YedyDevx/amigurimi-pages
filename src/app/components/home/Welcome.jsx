import Image from 'next/image';
import Link from 'next/link';
import ImgLogo from '../../images/ChepiCrochet-logo-1.png';

export default function Welcome() {
   return (
       <>
         <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center lg:text-left relative">
            <Image
               className="w-60 sm:w-60 lg:w-60"
               src={ImgLogo}
               alt="Logo Chepi Crochet"
            />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-lato text-[#1f6c76] mb-4 absoulte">
               Bienvenidos
            </h1>
            <p className="text-base px-4 sm:text-lg lg:text-xl text-gray-700 font-itim mb-8 lg:mb-12 text-center">
               Todos nuestros productos son hechos a mano con amor y dedicación, siempre contigo.
            </p>
            <Link
               className="text-lg sm:text-xl font-lato font-bold text-[#1f6c76] border-2 border-[#1f6c76] px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 hover:bg-[#1f6c76] hover:text-white hover:shadow-lg hover:-translate-y-1"
               href="../pages/products"
            >
               Conoce Nuestros Amigurumis
            </Link>
         </div>
       </>
   )
}