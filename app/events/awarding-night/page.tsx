import Image from 'next/image';
import { Raleway, Open_Sans } from 'next/font/google';
import Reveal from '@/components/Reveal';

const raleway = Raleway({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export default function AwardingNightPage() {
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
              EVENT
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
                leading-tight
              "
              style={{
                background:
                  'linear-gradient(90deg, #105D48 0%, #7dc142 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Awarding Night
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
                About Awarding Night
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
                  Awarding Night
                </span>{' '}

                is the formal closing event of the ReEnergize Summit,
                designed as a celebratory and networking occasion where finalists
                gather in a relaxed yet prestigious setting.
              </p>

              <p>
                The evening focuses on appreciating the journey of the summit,
                fostering connections, and enjoying the program through shared
                dining, networking sessions, and external performances.

                {' '}The event concludes with the

                <span className="font-semibold text-[#7dc142]">
                  {' '}awarding ceremony 

                </span>{' '}
                for each competition category and also the official closing of
                the ReEnergize Summit series.
              </p>

            </div>

          </section>
        </Reveal>

        {/* INFO CARDS */}
        <Reveal delay={0.3}>
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
                  28 June 2026
                </h3>

              </div>

            </div>

            {/* LOCATION */}
            <div
              className="
                bg-[#eef7e7]/90
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
                  Location: TBA
                </h3>

                <p className="text-[#55735d] text-lg md:text-xl">
                  Venue Information
                </p>

                <p className="text-[#8a9b8e] text-base md:text-lg">
                  To Be Announced
                </p>

              </div>

            </div>

          </div>
        </Reveal>

        {/* DRESSCODE */}
        <Reveal delay={0.4}>
          <div className="flex justify-center mb-8 md:mb-10 -mt-12">

            <div
              className="
                inline-flex
                flex-col
                items-center
                text-center
                bg-gradient-to-r
                from-white
                via-white/95
                to-[#f3f9ee]/90
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

      </div>

    </main>
  );
}