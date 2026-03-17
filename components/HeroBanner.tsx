import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full aspect-[21/10] md:aspect-[16/7] rounded-[20px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/dummyTitle.png"
        alt="Hero Banner"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A4731] via-[#1A4731]/80 to-transparent" />
      
      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-end p-[5%]">
        <div className="flex items-end justify-between gap-4">
          {/* Left: Title and Subtitle */}
          <div className="flex flex-col">
            <h1 className="font-['Open_Sans'] font-bold text-6xl lg:text-7xl 2xl:text-[138px] text-[#F5F5F5] leading-none">
              TITLE
            </h1>
            <p className="font-['Open_Sans'] font-normal text-xl lg:text-2xl 2xl:text-[45px] text-[#F5F5F5] mt-2">
              Sub title sub title sub title
            </p>
          </div>

          {/* Right: Read Now Button */}
          <Link href="/news">
            <button className="bg-[#FBD100] text-[#1F6444] font-['Open_Sans'] font-bold text-xl lg:text-2xl 2xl:text-[45px] px-8 lg:px-10 2xl:px-12 py-3 lg:py-4 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap">
              Read Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
