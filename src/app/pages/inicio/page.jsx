import SectionWelcome from "../../components/home/SectionWelcome";
import FooterWelcome from "../../components/home/FooterWelcome";
import Slider from "../../components/product/ProductSlider";
import Footer from "../../components/Footer";
import BtnWs from "../../components/BtnWs";
import CollectionsAndProducts from "../../components/product/CollectionAndProducts";

export default function Inicio() {
  return (
    <div >
      <div>
        <SectionWelcome/>
        <FooterWelcome />
        <Slider/>
        <CollectionsAndProducts/>
        <BtnWs/>
      </div>
      <Footer/>
    </div>
   
  );
}
