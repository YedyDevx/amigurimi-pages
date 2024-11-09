import Link from 'next/link';

export default function MobileMenu() {
  return (
    <nav className="lg:hidden flex flex-col items-center gap-4 font-lato text-lg text-[#1f6c76] font-bold bg-white shadow-md p-4 absolute w-full top-[70px] left-0 z-40">
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]" href="/">
        Inicio
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"/>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#f24877]" href="/pages/products">
        Amigurumis
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"/>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]" href="/pages/about">
        Sobre Nosotros
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"/>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#f24877]" href="/pages/contact">
        Contactanos
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"/>
      </Link>
    </nav>
  );
}
