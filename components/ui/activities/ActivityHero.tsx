'use client';

import Image from "next/image";
import Reveal from "@/components/Reveal";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const heroImages = [
  "/activities/overhaul1.jpg",
  "/activities/overhaul2.jpg",
  "/activities/green2.png",
  "/activities/company1.png",
  "/activities/green1.png",
  "/activities/company2.png",
  "/activities/overhaul3.jpg",
  "/activities/green3.png",
  "/activities/company3.png",
  "/activities/overhaul4.jpg",
];

export default function ActivityHero() {
  return (
    <section
      className="
        relative
        min-h-[65vh]
        lg:min-h-[78vh]
        flex items-center
        overflow-hidden
        bg-[#105D48]
        mt-[-56px]
        md:mt-[-96px]
        pt-[120px]
        md:pt-[150px]
      "
    >

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{
            delay: 3200,
            disableOnInteraction: false,
          }}
          speed={1400}
          loop
          className="w-full h-full"
        >
          {heroImages.map((img, i) => (
            <SwiperSlide key={i}>

              <div className="relative w-full h-full">

                <Image
                  src={img}
                  alt="Activity Background"
                  fill
                  priority
                  className="
                    object-cover
                    scale-105
                  "
                />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#105D48]/45 z-10" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#105D48]/60 via-[#105D48]/25 to-[#105D48]/65 z-10" />

      {/* OPTIONAL LIGHT EFFECT */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-[#7dc142]/20 blur-3xl rounded-full z-10" />

      {/* CONTENT */}
      <div className="relative z-20 px-6 lg:px-[120px] text-white max-w-5xl">

        <Reveal>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            SRE UI <br />
            Activities
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-lg lg:text-2xl text-white/80 leading-relaxed">
            Explore programs, initiatives, trainings, and collaborative activities
            conducted by SRE UI across internal, academic, and external divisions.
          </p>
        </Reveal>

      </div>

    </section>
  );
}