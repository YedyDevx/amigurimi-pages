"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";
import SectionAllProducts from "../../components/product/SectionAllProducts"
import Spinner from "../../components/Spinner"
import SectionPack from "../../components/product/SectionPack";

export default function Products() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); 
  }, []);

  return (
    <div className="bg-[#83838322]">
      <Header/>
      {loading ? (
        <Spinner/>
      ) : (
        <div>
          <motion.div
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="flex flex-col items-center gap-3  mt-12 text-[#1f6c76] ">
            <motion.div 
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-14">
              Nuestros Amigurumis
            </motion.div>
            <AnimatedShinyText>
              <div className="font-itim text-2xl text-center font-bol"> 
                Todas nuestras colecciones:
              </div>
            </AnimatedShinyText>
          </motion.div>
          <SectionAllProducts/>
          <SectionPack/>
          <Footer/>
        </div>
      )}
    </div>
  );  
}
