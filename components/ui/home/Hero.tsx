import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#1b4f43] overflow-hidden">
      
      {/* --- LAYER 1: (z-0) BACKGROUND IMAGE --- */}
      <Image 
        src="/herobg.svg" 
        alt="Wind turbines background" 
        fill 
        priority
        className="object-cover opacity-30 mix-blend-soft-light pointer-events-none z-0" 
      />

      {/* --- LAYER 2: (z-10) BOTTOM BLENDING OVERLAY --- */}
      <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-[#1b4f43] to-transparent z-10 pointer-events-none"></div>

      {/* --- LAYER 3: (z-20) MASSIVE CUT-OFF SRE SVG WATERMARK --- */}
      <div className="absolute inset-x-0 bottom-0 translate-y-[5%] flex justify-center z-20 pointer-events-none">
        <img 
          src="/srehero.svg" 
          alt="SRE Watermark" 
          className="w-[120%] opacity-50 select-none" 
        />
      </div>

      {/* --- LAYER 4: (z-30) TOP BLENDING OVERLAY --- */}
      <div className="absolute inset-x-0 top-0 h-32 md:h-40 bg-gradient-to-b from-[#1b4f43] to-transparent z-30 pointer-events-none"></div>

      {/* --- LAYER 5: (z-40) MAIN CONTENT --- */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-6 md:gap-8">
        
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
          Society of Renewable Energy <br />
          Universitas Indonesia <br />
          2024/25
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl max-w-5xl leading-relaxed">
          <span className="font-bold">SRE UI</span> is a student chapter focused on <span className="font-bold">nurturing future renewable energy leaders through learning, projects, and collaboration</span> for UI students, in alignment with all stakeholders.
        </p>

      </div>
    </section>
  );
}