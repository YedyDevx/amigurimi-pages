"use client";
import { motion } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";
import Spinner from "../../components/Spinner"
import BtnWs from "../../components/BtnWs";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  const sendEmail = async (e) => {
    e.preventDefault(); 

    try {
      await emailjs.sendForm(
        'service_u04i77u', 
        'template_ia5b2r4', 
        form.current, 
        'NCRNKRLv1EhVvrlw8'
      );
      setStatus('SUCCESS');
      console.log('SUCCESS!');
      form.current.reset(); 
    } catch (error) {
      setStatus('FAILED');
      console.log('FAILED...', error.text);
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {loading ? (
        <Spinner />
      ) : (
      <div>
        <div className="flex-grow mt-10 bg-[#F3F4F6] py-10 px-4 relative">
          <motion.div 
          initial={{ y: -100, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
          className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-5 pb-4">
            Contáctanos
          </motion.div>
          <AnimatedShinyText>
            <motion.div
            initial={{ y: -100, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.8, ease: "easeOut" }} 
            className="text-center text-lg mb-10 px-6 md:px-0 flex flex-col font-bold font-lato ">
              <span>
                ¿Tienes alguna pregunta o comentario?
              </span>
              <span>
                ¡Nos encantaría saber de ti!
              </span>
            </motion.div>
          </AnimatedShinyText>
          <motion.form
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }} 
            ref={form} 
            onSubmit={sendEmail}
            className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#136d75] font-lato text-lg font-semibold mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6c76]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#136d75] font-lato text-lg font-semibold mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1f6c76]"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#136d75] font-lato text-lg font-semibold mb-2">
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
              Enviar Correo
            </button>

            {status === 'SUCCESS' && (
              <div className='relative w-full rounded-full py-3 mt-4 bg-green-500'>
                <p className="text-white font-itim text-center text-lg">Correo enviado correctamente.</p>
              </div>
            )}
            {status === 'FAILED' && (
              <div className='relative w-full rounded-full py-3 mt-4 bg-red-500'>
                <p className="text-white font-itim text-center text-lg">Hubo un error al enviar el mensaje. Intenta nuevamente.</p>
              </div>
            )}
          </motion.form>
          <BtnWs/>
        </div>
        <Footer/>
      </div>
      )}
    </div>
  );
}
