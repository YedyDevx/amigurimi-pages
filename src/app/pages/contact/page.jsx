
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";
import BtnWs from "../../components/BtnWs";

export default function Contact() {

  return (
    <div className="flex flex-col min-h-screen">
    <Header />
    <div className="flex-grow mt-10 bg-[#F3F4F6] py-10 px-4 relative">
      <div className="font-lato text-4xl  font-bold text-center text-[#1f6c76] pt-5 pb-4">
        Contáctanos
      </div>

      <AnimatedShinyText>
        <div className="text-center text-lg mb-10 px-6 md:px-0 flex flex-col font-bold font-lato ">
          <span>¿Tienes alguna pregunta o comentario?</span>
          <span>¡Nos encantaría saber de ti!</span>
        </div>
      </AnimatedShinyText>

      <form
        className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-[#136d75] font-lato text-lg font-semibold mb-2"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6c76]"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-[#136d75] font-lato text-lg font-semibold mb-2"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6c76]"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-[#136d75] font-lato text-lg font-semibold mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#1f6c76]"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto bg-[#1f6c76] hover:bg-[#136d75] text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Enviar Mensaje
        </button>
      </form>
      <BtnWs/>
    </div>

    <Footer />
  </div>

  );
}
