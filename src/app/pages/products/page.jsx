import Header from "../../components/Header";
import Collections from "../../components/product/ProductCollections";
import ProductsAll from "../../components/product/ProductAll";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";

export default function Products() {
  return (
    <div className="bg-[#83838322]">
      <Header/>
      <div className="flex flex-col items-center gap-3  mt-14 text-[#1f6c76] ">
          <div className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-14">Toda nuestra coleccion</div>
            <AnimatedShinyText>
               <div className="font-itim text-2xl text-center font-bol">Amigurumis que tenemos disponibles:</div>
            </AnimatedShinyText>
         </div>
      <div className="mt-16">
        <Collections/>
      </div>
      <ProductsAll/>
      <Footer/>
    </div>
  );
}