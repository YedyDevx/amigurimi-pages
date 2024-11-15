"use client"
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
          <div className="flex flex-col items-center gap-3  mt-12 text-[#1f6c76] ">
            <div className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-14">
              Nuestros Amigurumis
            </div>
            <AnimatedShinyText>
              <div className="font-itim text-2xl text-center font-bol"> 
                Todas nuestras colecciones:
              </div>
            </AnimatedShinyText>
          </div>
          <SectionAllProducts/>
          <SectionPack/>
          <Footer/>
        </div>
      )}
    </div>
  );  
}
