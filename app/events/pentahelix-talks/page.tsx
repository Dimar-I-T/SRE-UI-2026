import Image from 'next/image';
import { Raleway, Open_Sans } from 'next/font/google';
import Reveal from '@/components/Reveal';

const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function PentahelixTalksPage() {
  return (
    <main
      className={`
        relative
        min-h-screen
        bg-[#f8faf7]
        overflow-hidden
        ${raleway.className}
      `}
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.16] pointer-events-none">
        <Image
          src="/bg-event.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 pt-32 md:pt-44 pb-28">

        {/* BADGE */}
        <Reveal>
          <div
            className="
              inline-flex
              items-center
              px-7 md:px-9
              py-3
              rounded-full
              rotate-[-6deg]
              hover:rotate-[-3deg]
              transition-all duration-300
              bg-white/70
              backdrop-blur-md
              border border-[#dce9d7]
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]
              mb-6
            "
          >
            <span
              className="
                text-xl
                md:text-2xl
                font-extrabold
                tracking-wide
                bg-gradient-to-r
                from-[#105D48]
                to-[#7dc142]
                bg-clip-text
                text-transparent
              "
            >
              PENTAHELIX TALKS
            </span>
          </div>
        </Reveal>

        {/* TITLE */}
        <Reveal delay={0.1}>
          <div className="mb-16">

            <h1
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-bold
                leading-[0.95]
              "
              style={{
                background:
                  'linear-gradient(90deg, #105D48 0%, #7dc142 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Grand Seminar:
              <br />
              Pentahelix Talks
            </h1>

            <div className="w-32 h-[4px] rounded-full bg-[#7dc142] mt-8" />

          </div>
        </Reveal>

        {/* ABOUT */}
        <Reveal delay={0.2}>
          <section className="mb-24 max-w-5xl">

            <div
              className="
                inline-flex
                items-center
                px-5 py-2
                rounded-full
                bg-gradient-to-r
                from-[#105D48]
                to-[#7dc142]
                mb-8
              "
            >
              <span className="text-white font-semibold text-2xl">
                About Grand Seminar: Pentahelix Talks
              </span>
            </div>

            <div
              className={`
                ${openSans.className}
                text-gray-700
                text-lg
                md:text-2xl
                leading-[1.9]
                text-justify
                space-y-8
              `}
            >

              <p>
                <span className="font-semibold text-[#105D48]">
                  Pentahelix Talks
                </span>{' '}
                
                is the flagship seminar session of the Re-Energize Summit organized by the{' '}

                <span className="font-semibold text-[#105D48]">
                  Society of Renewable Energy Universitas Indonesia
                </span>.
                
                This panel discussion brings together representatives from five key sectors:
                
                <span className="font-semibold text-[#7dc142]">
                  {' '}government, industry, academia, community, and media
                </span>,
                
                to share insights and perspectives on advancing renewable energy and supporting Indonesia’s energy transition.
              </p>

              <p>
                Through interdisciplinary dialogue and collaboration,
                
                <span className="font-semibold text-[#105D48]">
                  {' '}Pentahelix Talks
                </span>
                
                aims to foster knowledge exchange, encourage innovation, and strengthen synergy among stakeholders in creating
                
                <span className="font-semibold text-[#7dc142]">
                  {' '}sustainable and inclusive energy solutions
                </span>.
              </p>

            </div>

          </section>
        </Reveal>

        {/* THEME */}
        <Reveal delay={0.3}>
          <section className="mb-24 max-w-5xl">

            <div
              className="
                inline-flex
                items-center
                px-5 py-2
                rounded-full
                bg-gradient-to-r
                from-[#257069]
                to-[#8DEFA4]
                mb-8
              "
            >
              <span className="text-white font-semibold text-2xl">
                Theme
              </span>
            </div>

            <h2
              className={`
                ${openSans.className}
                text-[#2d6d38]
                text-3xl
                md:text-5xl
                italic
                font-bold
                leading-[1.3]
                mb-10
              `}
            >
              “Synergizing Smart and Inclusive Pathways for a Resilient Energy Ecosystem”
            </h2>

            <p
              className={`
                ${openSans.className}
                text-gray-700
                text-lg
                md:text-2xl
                leading-[1.9]
                text-justify
              `}
            >
              This theme highlights the importance of innovation, inclusivity,
              and collaboration in accelerating the energy transition while
              ensuring long-term system resilience.

              {' '}By integrating

              <span className="font-semibold text-[#105D48]">
                {' '}smart technologies
              </span>,

              inclusive stakeholder engagement, and adaptive strategies,
              this approach aims to build an energy ecosystem that is

              <span className="font-semibold text-[#7dc142]">
                {' '}sustainable, reliable, and accessible for all
              </span>.

              <br />
              <br />

              <span className="font-semibold text-[#105D48]">
                With two main focus areas:
              </span>

              <br />
              • Accelerating Innovation and Inclusive Energy Participation
              <br />
              • Enhancing System Reliability and Long-Term Sustainability
            </p>

          </section>
        </Reveal>

        {/* INFO CARDS */}
        <Reveal delay={0.4}>
          <div className="grid lg:grid-cols-2 gap-8 mb-24">

            {/* DATE */}
            <div
              className="
                bg-white/70
                backdrop-blur-md
                border border-[#dce9d7]
                rounded-[34px]
                p-7 md:p-8
                shadow-[0_10px_30px_rgba(16,93,72,0.06)]
                flex items-center gap-5
              "
            >

              <div
                className="
                  w-16 h-16 md:w-20 md:h-20
                  rounded-2xl
                  bg-[#eaf5df]
                  flex items-center justify-center
                "
              >
                <Image
                  src="/calender.png"
                  alt="calendar"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div>

                <p className="text-[#7dc142] font-semibold tracking-[0.18em] uppercase mb-2">
                  D-Date
                </p>

                <h3 className="text-[#105D48] text-3xl md:text-4xl font-bold">
                  27 June 2026
                </h3>
                <h3 className="text-[#105D48] text-2xl md:text-2xl">
                  12:30 - 17:55 WIB
                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <a
              href="https://maps.app.goo.gl/BnzbTta8j7XjkG9K7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                bg-[#eef7e7]/90
                backdrop-blur-md
                border border-[#dce9d7]
                rounded-[34px]
                p-7 md:p-8
                shadow-[0_10px_30px_rgba(16,93,72,0.06)]
                flex items-center gap-5
                transition-all duration-300
                hover:scale-[1.015]
              "
            >

              <div
                className="
                  w-16 h-16 md:w-20 md:h-20
                  rounded-2xl
                  bg-[#dff1d2]
                  flex items-center justify-center
                "
              >
                <Image
                  src="/location.png"
                  alt="location"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">

                <h3 className="text-[#105D48] text-2xl md:text-3xl font-bold mb-1">
                  Location: UI Depok
                </h3>

                <p className="text-[#55735d] text-lg md:text-xl">
                  Universitas Indonesia
                </p>

                <p className="text-[#8a9b8e] text-base md:text-lg">
                  Venue: Balai Sidang, Universitas Indonesia, Depok
                </p>

              </div>

              <span className="text-[#105D48] text-3xl transition group-hover:translate-x-1">
                ↗
              </span>

            </a>

          </div>
        </Reveal>

        {/* DRESSCODE */}
        <Reveal delay={0.45}>
        <div className="flex justify-center mb-8 md:mb-10 -mt-12">

            <div
            className="
                inline-flex
                flex-col
                items-center
                text-center
                bg-gradient-to-r from-white/90 to-[#eef7e7]/90
                backdrop-blur-md
                border border-[#dce9d7]
                rounded-[28px]
                px-8 py-6
                md:px-10 md:py-7
                shadow-[0_10px_30px_rgba(16,93,72,0.06)]
            "
            >

            <h3 className="text-[#105D48] text-xl md:text-2xl font-bold mb-2">
                Dresscode
            </h3>

            <p
                className={`
                ${openSans.className}
                text-gray-700
                text-base md:text-xl
                leading-[1.7]
                `}
            >
                TBA
            </p>

            </div>

        </div>
        </Reveal>

        {/* REGISTER BUTTON */}
        <Reveal delay={0.5}>
          <div className="flex justify-center">

            <a
              href="https://docs.google.com/forms/d/1v-AHANcKkdXJJgL8m1kdDJIUijPN5VzNWWUaxYTbrvI/edit?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative
                overflow-hidden
                flex items-center justify-center
                w-[290px]
                md:w-[560px]
                h-[82px]
                md:h-[110px]
                rounded-full
                text-white
                font-bold
                text-2xl
                md:text-5xl
                shadow-[0_20px_60px_rgba(125,193,66,0.28)]
                transition-all duration-300
                hover:scale-[1.03]
              "
              style={{
                background:
                  'linear-gradient(90deg, #0f7a4f 0%, #c7ea2f 100%)',
              }}
            >

              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

              <div className="relative z-10 flex items-center gap-4">

                <Image
                  src="/ticket.png"
                  alt="ticket"
                  width={64}
                  height={64}
                  className="object-contain"
                />

                <span>
                  Register
                </span>

              </div>

            </a>

          </div>
        </Reveal>

      </div>

    </main>
  );
}