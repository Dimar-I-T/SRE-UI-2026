import Image from "next/image";

export default function SummitInfo() {
  return (
    <section className="relative w-full py-12 md:py-16 flex flex-col items-center justify-center overflow-hidden bg-white">
      
      {/* --- LAYER 1: ACTUAL BACKGROUND IMAGE --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image 
          src="/reenergizebg.svg" 
          alt="Renewable hills background" 
          fill 
          priority
          className="object-cover object-bottom opacity-60 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
      </div>

      {/* --- LAYER 2: TOP & BOTTOM WHITE FADE TRANSITIONS --- */}
      {/* Top fade: white to transparent */}
      <div className="absolute inset-x-0 top-0 h-24 md:h-40 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Bottom fade: white to transparent */}
      <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

      {/* --- LAYER 3: CONTENT CONTAINER --- */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl px-6 gap-0">
        
        {/* ReEnergize SVG Banner */}
        <div className="relative w-[350px] md:w-[800px] h-[190px] md:h-[350px]">
          <Image 
            src="/reenergize.svg" 
            alt="ReEnergize Summit 2025" 
            fill 
            className="object-contain drop-shadow-sm" 
            priority
          />
        </div>

        {/* By SRE SVG */}
        <div className="relative w-[300px] md:w-[600px] h-[60px] md:h-[90px] -mt-8 mb-8">
          <Image 
            src="/bysre.svg" 
            alt="by SRE Universitas Indonesia" 
            fill 
            className="object-contain" 
          />
        </div>

        {/* Text Description Card */}
        <div className="bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full border border-white/50">
          <p className="text-[#006604] text-justify leading-relaxed text-base md:text-lg">
            ReEnergize Summit 2025 by SRE UI is <span className="font-bold">the biggest annual event organized by SRE UI</span>, 
            invites the public to participate in an engaging lineup of activities centered on renewable energy. 
            The events within ReEnergize Summit 2025 includes <span className="font-bold">Business Case Competition, 
            Policy Case Competition, Renewable Energy Innovation Competition, Policy Workshop, Field Trip, and Pentahelix Talks</span> all 
            designed to facilitate the growth of knowledge within our local community. With support from renewable energy experts, 
            SRE UI ReEnergize Summit <span className="font-bold">strives to drive meaningful change in Indonesia's energy 
            transition by promoting energy diversification, community resilience, and sustainable careers in the green sector.</span>
          </p>
        </div>

      </div>
    </section>
  );
}