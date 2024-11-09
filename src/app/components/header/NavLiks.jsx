import Link from 'next/link';

export default function NavLinks() {
  return (
    <nav className="lg:flex hidden gap-12 font-lato text-lg text-[#1f6c76] font-bold">
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]" href="/">
        Inicio
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#f24877]" href="/pages/products">
        Amigurumis
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]" href="/pages/about">
        Sobre Nosotros
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"></span>
      </Link>
      <Link className="relative group transition duration-300 ease-in-out hover:text-[#f24877]" href="/pages/contact">
        Contáctanos
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </nav>
  );
}
