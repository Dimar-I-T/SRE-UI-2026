import Image from 'next/image';
import { Raleway, Open_Sans } from 'next/font/google';
import Reveal from '@/components/Reveal';

const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function FieldTripPage() {
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
              FIELD TRIP
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
              Field Trip
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
                About Field Trip
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
                    Field Trip
                </span>{' '}
                
                will offer participants a hands-on opportunity to visit
                leading companies at the forefront of the{' '}

                <span className="font-semibold text-[#105D48]">
                    energy transition and sustainability
                </span>.

                {' '}This program allows participants to{' '}

                <span className="font-semibold text-[#105D48]">
                    explore real-world industrial facilities
                </span>
                , engage directly with{' '}

                <span className="font-semibold text-[#105D48]">
                    industry leaders
                </span>
                , and observe the practical application of{' '}

                <span className="font-semibold text-[#7dc142]">
                    renewable energy practices
                </span>.
                </p>

                <p>
                Through interactive sessions with experts, participants will gain
                valuable insights into clean energy production, environmental impact
                mitigation, and emerging career pathways in the green sector.

                {' '}This{' '}

                <span className="font-semibold text-[#105D48]">
                    exclusive program highly prioritizes competition finalists and active
                    SRE UI members
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
              “Exploring the Key Sectors in Sustainable Transformation”
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
              This theme highlights the synergy in transition that requires
              technology, policy, and cross-sector partnerships. As a platform
              that bridges the information gap on green career pathways and
              corporate strategies, the program also provides direct exposure to
              real-world industrial practices for students.
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
                  text-4xl
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
                  10 June 2026    
                </h3>
                <h3 className="text-[#105D48] text-2xl md:text-2xl">
                  12:00 - 14:30 WIB
                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <a
              href="https://maps.app.goo.gl/PuXruerSSkW9Rz5d6"
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
                  text-4xl
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
                  Location: PT. Geo Dipa Energi Patuha 
                </h3>

                <p className="text-[#55735d] text-lg md:text-xl">
                  Venue Information
                </p>

                <p className="text-[#8a9b8e] text-base md:text-lg">
                  PT. Geo Dipa Energi Patuha 
                </p>

              </div>

              <span className="text-[#105D48] text-3xl transition group-hover:translate-x-1">
                ↗
              </span>

            </a>

          </div>
        </Reveal>

        {/* REGISTER BUTTON */}
        <Reveal delay={0.5}>
          <div className="flex justify-center">

            <a
              href="https://docs.google.com/forms/d/1R-cjuF8F7pW9TuOFjjjNhB1ITLpq2JR60dF5I95mnYw/edit?usp=drivesdk"
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