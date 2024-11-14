import SectionWelcome from "../../components/home/SectionWelcome";
import FooterWelcome from "../../components/home/FooterWelcome";
import Slider from "../../components/product/ProductSlider";
import Footer from "../../components/Footer";
import BtnWs from "../../components/BtnWs";
import SectionProduct from "../../components/home/SectionProducts";

export default function Inicio() {
  return (
    <div >
      <div>
        <SectionWelcome/>
        <FooterWelcome />
        <Slider/>
        <SectionProduct/>
        <BtnWs/>
      </div>
      <Footer/>
    </div>
   
  );
}
