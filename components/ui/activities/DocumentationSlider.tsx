'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';

export default function DocumentationSlider({
  images,
}: {
  images: string[];
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
      }}
      loop
      className="activity-swiper rounded-[22px] overflow-hidden shadow-[0_10px_30px_rgba(16,93,72,0.12)]"
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <div className="relative w-full h-[240px] md:h-[280px] lg:h-[340px]">

            <Image
              src={img}
              alt="documentation"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#105D48]/40 to-transparent" />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}