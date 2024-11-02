import Inicio from "./pages/inicio/page";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <div className="w-full min-h-screen bg-[#fcfcfc] "> 
      <Header />
      <Inicio />
    </div>
     
    </>
  );
}
