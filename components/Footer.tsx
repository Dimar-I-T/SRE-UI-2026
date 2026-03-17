import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#105D48] to-[#228D72] py-10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <p className="text-white font-bold font-['SF_Pro_Display'] font-sans tracking-wide text-lg md:text-xl lg:text-2xl xl:text-[28px] mb-10">
          © 2025 Society of Renewable Energy Universitas Indonesia
        </p>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-10">
          <div>
            <Image
              src="/logoFooter.svg"
              alt="Society of Renewable Energy Universitas Indonesia footer logo"
              width={603}
              height={120}
              className="w-[80%] max-w-[400px] lg:max-w-[603px] h-auto"
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <Link href="https://www.instagram.com/" className="flex items-center gap-4">
              <span className="bg-white rounded-full w-12 h-12 lg:w-16 lg:h-16 flex items-center justify-center">
                <FaInstagram className="text-[#105D48] text-2xl lg:text-4xl" />
              </span>
              <span className="text-white font-bold text-xl lg:text-3xl">sreui.chapter</span>
            </Link>

            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full px-5 py-3 lg:px-6 lg:py-4 flex gap-4 lg:gap-6 items-center">
                <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                  <FaLinkedin className="text-[#105D48] text-2xl lg:text-4xl" />
                </Link>
                <Link href="https://youtube.com" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
                  <FaYoutube className="text-[#105D48] text-2xl lg:text-4xl" />
                </Link>
              </div>
              <span className="text-white font-sans text-sm lg:text-base max-w-[200px] leading-tight whitespace-pre-line">
                {"Society of Renewable Energy\nUniversitas Indonesia"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
