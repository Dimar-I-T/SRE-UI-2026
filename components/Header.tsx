'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const competitions = [
  { label: 'REMCC', href: '/res/REMCC' },
  { label: 'IBCC', href: '/res/IBCC' },
  { label: 'REPPC', href: '/res/REPPC' },
];

const events = [
  { label: 'Field Trip', href: '/events/field-trip' },
  { label: 'Awarding Night', href: '/events/awarding-night' },
  { label: 'Pentahelix Talks', href: '/events/pentahelix-talks' },
];

export default function Header() {
  const pathname = usePathname();
  const isRes = pathname.startsWith('/res');
  const isEventPage = pathname.startsWith('/events');
  const isRESMode = isRes || isEventPage;
  const isSRE = !isRes && !isEventPage;
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);

  return (
    <header
      className="w-full h-14 md:h-[96px] flex items-center justify-center relative"
      style={{ backgroundColor: '#105D48' }}
    >

      {/* ── HOME layout ── */}
      {isSRE && (
        <>
          {/* Logo — left */}
          <Link href="/" className="absolute left-4 md:left-10">
            <Image
              src="/logoHeader.svg"
              alt="Company Logo"
              width={298.28}
              height={48.19}
              className="w-[137px] md:w-[205px] h-auto object-contain"
            />
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="absolute right-4 flex flex-col gap-1 lg:hidden"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

          {/* Desktop nav — right side */}
          <div className="hidden lg:flex items-center gap-4 absolute right-10">
            <Link
              href="/"
              className={`px-4 py-2 border-[1.7px] rounded-full transition-all duration-200 ease-out ${
                pathname === '/'
                  ? 'bg-white text-[#105D48] border-white'
                  : 'border-white text-white hover:bg-white hover:text-[#105D48]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/all-articles"
              className={`px-4 py-2 border-[1.7px] rounded-full transition-all duration-200 ease-out ${
                pathname.startsWith('/all-articles')
                  ? 'bg-white text-[#105D48] border-white'
                  : 'border-white text-white hover:bg-white hover:text-[#105D48]'
              }`}
            >
              Articles
            </Link>
            <Link
              href="/all-news"
              className={`px-4 py-2 border-[1.7px] rounded-full transition-all duration-200 ease-out ${
                pathname.startsWith('/all-news')
                  ? 'bg-white text-[#105D48] border-white'
                  : 'border-white text-white hover:bg-white hover:text-[#105D48]'
              }`}
            >
              News
            </Link>
            <Link
              href="/activities"
              className={`px-4 py-2 border-[1.7px] rounded-full transition-all duration-200 ease-out ${
                pathname.startsWith('/activities')
                  ? 'bg-white text-[#105D48] border-white'
                  : 'border-white text-white hover:bg-white hover:text-[#105D48]'
              }`}
            >
              Activities
            </Link>
            <Link
              href="/res/REMCC"
              className="
                relative w-[95px] h-[40px]
                rounded-full
                bg-[#6F9777]
                flex items-center
                px-[5px]
                overflow-hidden
                transition-all duration-300
              "
            >

              <Image
                src="/logo-res.png"
                alt="RES"
                width={48}
                height={22}
                className="absolute right-[8px] object-contain"
              />

              <div
                className="
                  w-[30px]
                  h-[30px]
                  rounded-full
                  bg-[#F5F5F5]
                  shadow-md
                  z-10
                "
              />
            </Link>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="absolute top-14 left-0 w-full bg-[#105D48] flex flex-col items-start px-6 py-4 gap-3 lg:hidden shadow-lg z-50">
              <Link
                href="/"
                className={`w-full px-4 py-3 rounded-xl transition-all duration-200 ease-out ${
                  pathname === '/'
                    ? 'bg-white text-[#105D48]'
                    : 'text-white border border-white/20'
                }`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <Link href="/all-articles"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 ease-out ${
                      pathname.startsWith('/all-articles')
                        ? 'bg-white text-[#105D48]'
                        : 'text-white border border-white/20'
                    }`}
                    onClick={() => setOpen(false)}
              >
                Articles
              </Link>
              <Link href="/all-news"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 ease-out ${
                      pathname.startsWith('/all-news')
                        ? 'bg-white text-[#105D48]'
                        : 'text-white border border-white/20'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                News
              </Link>
              <Link href="/activities"
                    className={`w-full px-4 py-3 rounded-xl transition-all duration-200 ease-out ${
                      pathname.startsWith('/activities')
                        ? 'bg-white text-[#105D48]'
                        : 'text-white border border-white/20'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                Activities
              </Link>
              <Link
              href="/res/REMCC"
              onClick={() => setOpen(false)}
              className="
                relative w-[95px] h-[40px]
                rounded-full
                bg-[#6F9777]
                flex items-center
                px-[5px]
                overflow-hidden
                transition-all duration-300
              "
            >

              <Image
                src="/logo-res.png"
                alt="RES"
                width={48}
                height={22}
                className="absolute right-[8px] object-contain"
              />

              <div
                className="
                  w-[30px]
                  h-[30px]
                  rounded-full
                  bg-[#F5F5F5]
                  shadow-md
                  z-10
                "
              />
            </Link>
            </div>
          )}
        </>
      )}

      {/* ── /res layout ── */}
      {isRESMode && (
        <>
          <Link href="/" className="absolute left-4 md:left-10">
            <Image
              src="/logoHeader.svg"
              alt="Company Logo"
              width={298.28}
              height={48.19}
              className="w-[137px] md:w-[205px] h-auto object-contain"
            />
          </Link>

          {/* Desktop: Events */}
          <div className="hidden lg:flex items-center gap-4 absolute left-[280px]">
            <div className="relative">
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                className={`px-4 py-2 border rounded-full transition-all duration-200 ease-out flex items-center gap-2 ${
                  isEventPage
                    ? 'bg-white text-[#105D48] border-white'
                    : 'border-white text-white hover:bg-white hover:text-[#105D48]'
                }`}
              >
                Events
                <span className="text-xs">{eventsOpen ? '▲' : '▼'}</span>
              </button>
              {eventsOpen && (
                <div className="absolute top-12 left-0 bg-[#105D48] border border-white/20 rounded-xl shadow-lg z-50 min-w-[180px] flex flex-col overflow-hidden">
                  {events.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className={`px-5 py-3 transition-all duration-200 ease-out border-b border-white/10 last:border-none ${
                        pathname === href
                          ? 'bg-white text-[#105D48]'
                          : 'text-white hover:bg-white/10'
                      }`}
                      onClick={() => setEventsOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop: Competition pills */}
          <div className="hidden lg:flex absolute right-10 gap-4">
            {competitions.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`text-white text-xl font-semibold px-4 py-1.5 rounded-full border transition-all duration-200 ease-out ${
                  pathname === href
                    ? 'bg-white/20 border-white/60'
                    : 'border-transparent hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/"
              className="
                relative w-[95px] h-[40px]
                rounded-full
                bg-[#6F9777]
                flex items-center
                px-[5px]
                overflow-hidden
                transition-all duration-300
              "
            >

              <Image
                src="/logo-sre.png"
                alt="SRE"
                width={48}
                height={22}
                className="absolute left-[8px] object-contain"
              />

              <div
                className="
                  absolute right-[5px]
                  w-[30px]
                  h-[30px]
                  rounded-full
                  bg-[#F5F5F5]
                  shadow-md
                  z-10
                "
              />
            </Link>
          </div>

          {/* /res Mobile hamburger */}
          <button
            onClick={() => setResOpen(!resOpen)}
            className="absolute right-4 flex flex-col gap-1 lg:hidden"
          >
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>

          {/* /res Mobile dropdown */}
          {resOpen && (
            <div className="absolute top-14 left-0 w-full bg-[#105D48] flex flex-col items-start px-6 py-4 gap-3 lg:hidden shadow-lg z-50">
              <button
                className={`pb-2 w-full text-left flex justify-between items-center border-b transition-all duration-200 ease-out ${
                  isEventPage
                    ? 'text-[#105D48] bg-white rounded-xl px-3 py-3 border-white'
                    : 'text-white border-white'
                }`}
                onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
              >
                Events
                <span className="text-xs">{mobileEventsOpen ? '▲' : '▼'}</span>
              </button>

              {mobileEventsOpen && (
                <div className="flex flex-col gap-2 w-full pl-4">
                  {events.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className={`pb-2 w-full rounded-lg px-2 py-2 transition-all duration-200 ease-out ${
                        pathname === href
                          ? 'bg-white text-[#105D48]'
                          : 'text-white/80 border-b border-white/30'
                      }`}
                      onClick={() => {
                        setResOpen(false);
                        setMobileEventsOpen(false);
                      }}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}

              <p className="text-white/50 text-xs pt-1">Competitions</p>
              {competitions.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className={`pb-2 w-full border-b transition-all duration-200 ease-out px-3 py-1 rounded-full ${
                    pathname === href
                      ? 'bg-white/20 text-white border-white/60'
                      : 'text-white border-white hover:bg-white/10'
                  }`}
                  onClick={() => setResOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
              href="/"
              onClick={() => setResOpen(false)}
              className="
                relative w-[95px] h-[40px]
                rounded-full
                bg-[#6F9777]
                flex items-center
                px-[5px]
                overflow-hidden
                transition-all duration-300
              "
            >

              <Image
                src="/logo-sre.png"
                alt="SRE"
                width={48}
                height={22}
                className="absolute left-[8px] object-contain"
              />

              <div
                className="
                  absolute right-[5px]
                  w-[30px]
                  h-[30px]
                  rounded-full
                  bg-[#F5F5F5]
                  shadow-md
                  z-10
                "
              />
            </Link>
            </div>
          )}
        </>
      )}

    </header>
  );
}