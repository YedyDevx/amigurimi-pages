"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../../images/ChepiCrochet-logo-2.png";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";
import Spinner from "../../components/Spinner";
import BtnWs from "../../components/BtnWs";

export default function About() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="flex-grow mt-16 bg-[#F3F4F6] pb-10 ">
            <motion.h1 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-5 mb-4">
              Sobre mí
            </motion.h1>
            <AnimatedShinyText>
              <motion.div 
              initial={{ y: -100, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1, ease: "easeOut" }} 
              className="font-itim text-2xl text-center mb-4 ">¿Quiénes somos?</motion.div>
            </AnimatedShinyText>
            
            <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-white p-6 md:p-12 gap-8">
              <Image
                src={AboutImg}
                alt="Logo de ChepiCrochet"
                width={300}
                height={300}
                className="w-96 h-96"
              />
              <div className="flex flex-col gap-6 text-center md:text-left font-lato text-md md:text-lg text-[#136d75] leading-relaxed">
                <p>
                  ChepiCrochet es un emprendimiento apasionado por el arte del crochet, donde cada creación está hecha a mano con dedicación y creatividad. Ubicados en Colombia, llevamos el tejido más allá de la artesanía convencional, ofreciendo piezas que cuentan historias y brindan compañía. Nuestro catálogo incluye amigurumis personalizados, llaveros, flores eternas en hermosos ramos y materas, cada pieza diseñada con mucho amor.
                </p>
                <p>
                  Chepicrochet es más que una marca de amigurumis; es una propuesta artesanal que fusiona dedicación, creatividad y autenticidad. Cada pieza creada bajo el nombre de Chepicrochet representa el amor por el crochet y la pasión por ofrecer detalles únicos y significativos.
                </p>
                <div className="flex justify-center md:justify-start gap-6 mt-4 font-lato text-lg font-bold text-[#136d75] m-auto">
                  <Link
                    href="/"
                    className="relative group transition duration-300 ease-in-out hover:text-[#fb9a00]"
                  >
                    Volver al Inicio
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb9a00] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link
                    href="/pages/products"
                    className="relative group transition duration-300 ease-in-out hover:text-[#f24877]"
                  >
                    Ver Productos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#f24877] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
            </motion.div>
            <BtnWs/>
          </div>
          <Footer /> 
        </div>
      )}
    </div>
  );
}
