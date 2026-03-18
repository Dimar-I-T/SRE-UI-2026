import Link from "next/link";

export default function Cta() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 pb-32 flex flex-col items-start gap-12">
      
      {/* Text Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Are you ready to participate <br className="hidden md:block" />
          in <span className="bg-gradient-to-r from-[#F37221] via-[#FEF200] to-[#299C00] bg-clip-text text-transparent">ReEnergize Summit 2025?</span>
        </h2>
        <p className="text-lg font-bold text-gray-900 mt-2">
          We provide more.
        </p>
      </div>

      {/* Event Links/Tags */}
      <div className="flex flex-wrap items-center gap-6 md:gap-8 text-sm md:text-base font-bold text-[#1b4f43]">
        
        <Link href="/bcc" className="hover:text-[#4ca120] transition-colors duration-300">
          BCC
        </Link>
        
        <Link href="/pcc" className="hover:text-[#4ca120] transition-colors duration-300">
          PCC
        </Link>
        
        <Link href="/reic" className="hover:text-[#4ca120] transition-colors duration-300">
          REIC
        </Link>
        
        <Link href="/field-trip" className="hover:text-[#4ca120] transition-colors duration-300">
          Field Trip
        </Link>
        
        <Link href="/workshop" className="hover:text-[#4ca120] transition-colors duration-300">
          Workshop
        </Link>
        
        <Link href="/pentahelix-talks" className="hover:text-[#4ca120] transition-colors duration-300">
          Pentahelix Talks
        </Link>

      </div>

    </section>
  );
}