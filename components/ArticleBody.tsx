'use client';

import Link from 'next/link';
import {
  FaTiktok,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
} from 'react-icons/fa6';

interface ArticleBodyProps {
  buttonText: string;
  buttonLink: string;
}

const ArticleBody: React.FC<ArticleBodyProps> = ({ buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col mt-10">
      <p className="font-sans font-normal text-[20px] text-black leading-relaxed text-justify mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada
        ullamcorper enim, nec iaculis ipsum tristique vitae. Praesent efficitur,
        justo id faucibus euismod, tortor felis tincidunt risus, et pulvinar est
        enim non urna.
      </p>
      <p className="font-sans font-normal text-[20px] text-black leading-relaxed text-justify mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      <p className="font-sans font-normal text-[20px] text-black leading-relaxed text-justify mb-6">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
      </p>
      <p className="font-sans font-normal text-[20px] text-black leading-relaxed text-justify mb-6">
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
        laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
        reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
      </p>
      <p className="font-sans font-normal text-[20px] text-black leading-relaxed text-justify mb-6">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
        praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
        excepturi sint occaecati cupiditate non provident, similique sunt in culpa.
      </p>

      <div className="mt-12 flex flex-col gap-8">
        <div className="flex items-center gap-6">
          <p className="font-['Open_Sans'] font-semibold text-[29px] text-[#105D48]">
            Share this article:
          </p>
          <button type="button" className="text-3xl text-black cursor-pointer hover:scale-110 hover:text-[#105D48] transition-all duration-300" aria-label="Share on TikTok">
            <FaTiktok />
          </button>
          <button type="button" className="text-3xl text-black cursor-pointer hover:scale-110 hover:text-[#105D48] transition-all duration-300" aria-label="Share on WhatsApp">
            <FaWhatsapp />
          </button>
          <button type="button" className="text-3xl text-black cursor-pointer hover:scale-110 hover:text-[#105D48] transition-all duration-300" aria-label="Share on Instagram">
            <FaInstagram />
          </button>
          <button type="button" className="text-3xl text-black cursor-pointer hover:scale-110 hover:text-[#105D48] transition-all duration-300" aria-label="Share on X">
            <FaXTwitter />
          </button>
          <button type="button" className="text-3xl text-black cursor-pointer hover:scale-110 hover:text-[#105D48] transition-all duration-300" aria-label="Share on Facebook">
            <FaFacebook />
          </button>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#FEF200] text-[#105D48] font-semibold px-8 py-3 rounded-full cursor-pointer hover:scale-105 hover:shadow-lg hover:brightness-95 transition-all duration-300"
          >
            Back to top
          </button>

          <Link
            href={buttonLink}
            className="bg-[#FEF200] text-[#105D48] font-semibold px-8 py-3 rounded-full cursor-pointer hover:scale-105 hover:shadow-lg hover:brightness-95 transition-all duration-300"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleBody;