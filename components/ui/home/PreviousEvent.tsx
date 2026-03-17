import Image from "next/image";

export default function PreviousEvent() {
  return (
    <section className="relative w-full py-16 bg-white flex flex-col items-center">
      
      {/* --- HEADER --- */}
      <div className="w-full max-w-6xl mx-auto px-6 flex items-center gap-6 mb-8 z-20">
        <h2 className="text-2xl md:text-4xl font-bold text-[#4ca120] whitespace-nowrap">
          Our Previous Event
        </h2>
        <div className="flex-grow h-[2px] md:h-1 bg-gradient-to-r from-[#4ca120] via-yellow-500 to-orange-500 rounded-full"></div>
      </div>

      {/* --- FULL WIDTH GALLERY CONTAINER --- */}
      <div className="relative w-full">
        
        {/* The Photo Grid */}
        <div className="flex flex-col w-full">
          
          {/* Top Row: 3 Images side-by-side */}
          {/* REDUCED HEIGHTS: h-[120px] md:h-[200px] lg:h-[260px] */}
          <div className="grid grid-cols-3 w-full h-[120px] md:h-[200px] lg:h-[260px]">
            <div className="relative w-full h-full">
              <Image src="/event1.svg" alt="ReEnergize Event 1" fill className="object-cover object-top" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/event2.svg" alt="ReEnergize Event 2" fill className="object-cover object-center" />
            </div>
            <div className="relative w-full h-full">
              <Image src="/event3.svg" alt="ReEnergize Event 3" fill className="object-cover object-top" />
            </div>
          </div>

          {/* Bottom Row: 1 massive group photo */}
          {/* REDUCED HEIGHTS: h-[150px] md:h-[260px] lg:h-[360px] */}
          <div className="relative w-full h-[150px] md:h-[260px] lg:h-[360px]">
            <Image src="/eventgroup.svg" alt="ReEnergize Group Event" fill className="object-cover object-center" />
          </div>

        </div>

        {/* --- FILTERS & FADE TRANSITIONS --- */}
        
        {/* The overall yellow filter tint over the images */}
        <div className="absolute inset-0 bg-[#FEF200]/20 mix-blend-multiply z-10 pointer-events-none"></div>

        {/* Top fade: Solid White (#FFFFFF) transitioning into Transparent Yellow (#FEF20000) */}
        {/* Shrunk to h-32 so it doesn't cover too much of the shorter images */}
        <div className="absolute inset-x-0 top-0 h-16 md:h-32 bg-gradient-to-b from-white to-[#FEF200]/0 z-20 pointer-events-none"></div>
        
        {/* Bottom fade: Solid White (#FFFFFF) transitioning into Transparent Yellow (#FEF20000) */}
        {/* Shrunk to h-32 so it doesn't cover too much of the shorter images */}
        <div className="absolute inset-x-0 bottom-0 h-16 md:h-32 bg-gradient-to-t from-white to-[#FEF200]/0 z-20 pointer-events-none"></div>

      </div>
    </section>
  );
}