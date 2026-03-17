import Image from "next/image";

export default function About() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 flex flex-col gap-16 text-[#1b4f43]">
      
      {/* --- VISION SECTION --- */}
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl font-serif italic font-bold">Our Vision</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          SRE UI as a sustainable organization with <span className="font-bold text-[#1b4f43]">focus on renewable energy</span> that <span className="font-bold text-[#1b4f43]">nurtures member growth, enables impactful collaborations</span>, and <span className="font-bold text-[#1b4f43]">advances positive influences for continuous change.</span>
        </p>
      </div>

      {/* --- MISSION SECTION --- */}
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-serif italic font-bold">Our Mission</h2>
        
        {/* Switched to a 10-column grid for the 30/70 split */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch">
          
          {/* Left: Image (Takes up 3 of 10 columns = 30%) */}
          <div className="relative w-full min-h-[300px] md:min-h-full md:col-span-3 rounded-xl overflow-hidden shadow-md border border-gray-100/50">
            <Image 
              src="/mission.svg" 
              alt="Solar Panels" 
              fill 
              className="object-cover z-0" 
            />
            {/* The Green Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#1b4f43] to-transparent z-10 pointer-events-none"></div>
          </div>

          {/* Right: Mission List Card (Takes up 7 of 10 columns = 70%) */}
          <div className="md:col-span-7 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-gray-100 p-8">
            <ol className="flex flex-col gap-4 list-decimal list-outside ml-4 text-gray-700 leading-relaxed">
              <li className="pl-2">
                <strong className="text-[#1b4f43]">Nurturing future leaders in renewable energy</strong> in their personal and professional development journey.
              </li>
              <li className="pl-2">
                <strong className="text-[#1b4f43]">Aligning members purpose</strong> to learn and engage in organizational activities.
              </li>
              <li className="pl-2">
                <strong className="text-[#1b4f43]">Empowering the youth to be aware and involved in renewable energy development movement.</strong>
              </li>
              <li className="pl-2">
                <strong className="text-[#1b4f43]">Promoting supportive and constructive environment</strong> to drive progress among communities and stakeholders.
              </li>
              <li className="pl-2">
                <strong className="text-[#1b4f43]">Elevating positive impact through programs and collaborations</strong> that benefit both our members and the broader society.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* --- CORE VALUES SECTION --- */}
      {/* Changed to flex-col items-center for mobile, keeping md:items-center and md:flex-row for desktop */}
      <div className="flex flex-col items-center md:flex-row md:items-start gap-6 w-full">
        <h2 className="text-4xl font-serif italic font-bold whitespace-nowrap text-center md:text-left">Our Core Values</h2>
        
        {/* Yellow Chevrons pointing left */}
        {/* Added justify-center for mobile stacking, keeping md:justify-start for desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 text-xl font-bold italic text-[#1b4f43]">
          <div className="bg-[#facc15] px-4 py-2 w-48 md:w-50 text-center" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 50%, 100% 100%, 15% 100%, 0% 50%)' }}>Engage</div>
          <div className="bg-[#facc15] px-4 py-2 w-48 md:w-50 text-center" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 50%, 100% 100%, 15% 100%, 0% 50%)' }}>Empower</div>
          <div className="bg-[#facc15] px-4 py-2 w-48 md:w-50 text-center" style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 50%, 100% 100%, 15% 100%, 0% 50%)' }}>Elevate</div>
        </div>
      </div>

    </section>
  );
}