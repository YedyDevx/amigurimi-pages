import SectionWelcome from "../../components/home/SectionWelcome";
import FooterWelcome from "../../components/home/FooterWelcome";
import Slider from "../../components/home/ProductSlider";
import Collections from "../../components/home/ProductCollections";
import ProductsAll from "../../components/home/ProductAll";
import Footer from "../../components/Footer";

export default function Inicio() {
  return (
    <div >
      <div>
        <SectionWelcome/>
        <FooterWelcome />
        <Slider/>
        <Collections/>
        <ProductsAll/>
      </div>
      <Footer/>
    </div>
   
  );
}
