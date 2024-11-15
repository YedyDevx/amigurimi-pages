import SectionWelcome from "../../components/home/SectionWelcome";
import FooterWelcome from "../../components/home/FooterWelcome";
import Slider from "../../components/product/ProductSlider";
import Footer from "../../components/Footer";
import BtnWs from "../../components/BtnWs";
import SectionProduct from "../../components/home/SectionProducts";
import SectionPack from "../../components/product/SectionPack";

export default function Inicio() {
  return (
    <div >
      <div>
        <SectionWelcome/>
        <FooterWelcome />
        <Slider/>
        <SectionProduct/>
        <BtnWs/>
        <SectionPack/>
      </div>
      <Footer/>
    </div>
   
  );
}
