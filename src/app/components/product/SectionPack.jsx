'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import Pack1 from '../../images/pack/empaque.png';
import Pack2 from '../../images/pack/pack.png';
import Pack3 from '../../images/pack/pack-target.png';

const pack = [
  {
    img: Pack1,
    title: 'Empaque Elegante',
    description:
      'Cada producto se presenta en un empaque único y cuidadosamente diseñado. Incluye una caja personalizada con el logotipo de nuestra marca y decoraciones distintivas.',
  },
  {
    img: Pack2,
    title: 'Diseño Minimalista',
    description:
      'Nuestro empaque destaca por su diseño minimalista, reflejando la esencia de cada producto con detalles simples pero impactantes.',
  },
  {
    img: Pack3,
    title: 'Sostenibilidad',
    description:
      'Hemos optado por agregar tarjetas decorativas, una relacionada al Amigurumi y una tarjeta sobre el cuidado general del producto. ',
  },
];

export default function SectionPack() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-[#1f6c76] mb-6">
        Empaques Destacados
      </h2>

      <div className="relative">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {pack.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-xl p-5 gap-4"
            >
               <div className='flex flex-col items-center'>
                  <h3 className="text-xl font-semibold text-[#1f6c76] mb-2">
                     {item.title}
                  </h3>
                  <p className="text-sm text-center text-gray-600">{item.description}</p>
                  <Image
                     src={item.img}
                     alt={item.title}
                     className="w-72 h-72 object-cover rounded-md mb-4 "
                  />
               </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
