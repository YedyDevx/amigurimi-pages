import SectionWelcome from "../../components/home/SectionWelcome";
import FooterWelcome from "../../components/home/FooterWelcome";
import Slider from "../../components/product/ProductSlider";
import Collections from "../../components/product/ProductCollections";
import ProductsAll from "../../components/product/ProductAll";
import Footer from "../../components/Footer";
import BtnWs from "../../components/BtnWs";

export default function Inicio() {
  return (
    <div >
      <div>
        <SectionWelcome/>
        <FooterWelcome />
        <Slider/>
        <Collections/>
        <ProductsAll/>
        <BtnWs/>
      </div>
      <Footer/>
    </div>
   
  );
}
