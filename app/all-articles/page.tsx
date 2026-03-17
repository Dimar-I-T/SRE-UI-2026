import React from 'react';
import Image from 'next/image';
import HeroBanner from '@/components/HeroBanner';
import NewsList from '@/components/NewsList';

const AllArticlePage: React.FC = () => {
  return (
    <main className="relative min-h-screen bg-[#FFFFFF] font-['Open_Sans'] overflow-hidden">
      {/* Ornament 1: Top-left, behind content */}
      <div className="absolute top-0 left-[2%] -z-10">
        <Image
          src="/HiasanAll1.svg"
          alt="Ornament 1"
          width={300}
          height={300}
          className="w-auto h-auto opacity-80"
        />
      </div>

      {/* Ornament 2: Middle-right */}
      <div className="absolute top-1/2 right-[2%] -translate-y-1/2">
        <Image
          src="/HiasanAll2.svg"
          alt="Ornament 2"
          width={250}
          height={250}
          className="w-auto h-auto opacity-80"
        />
      </div>

      {/* Ornament 3: Bottom-left */}
      <div className="absolute bottom-0 left-[-5%]">
        <Image
          src="/HiasanAll3.svg"
          alt="Ornament 3"
          width={280}
          height={280}
          className="w-auto h-auto opacity-80"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Page Title */}
        <h1 className="font-['SF_Pro_Display'] font-bold text-5xl 2xl:text-[80px] text-[#105D48] text-center mb-12">
          All Articles
        </h1>

        {/* Hero Banner Component */}
        <HeroBanner />
        <NewsList />

      </div>
    </main>
  );
};

export default AllArticlePage;
