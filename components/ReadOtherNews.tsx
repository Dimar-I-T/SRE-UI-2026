import React from 'react';
import Link from 'next/link';

type NewsItem = {
  id: number;
  title: string;
  image: string;
};

interface ReadOtherNewsProps {
  title: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
    image: '/dummyNews.png',
  },
  {
    id: 2,
    title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
    image: '/dummyNews.png',
  },
  {
    id: 3,
    title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
    image: '/dummyNews.png',
  },
  {
    id: 4,
    title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE',
    image: '/dummyNews.png',
  },
];

const ReadOtherNews: React.FC<ReadOtherNewsProps> = ({ title }) => {
  return (
    <section className="w-full mt-24 pt-16 border-t border-gray-100">
      <h2 className="font-['Open_Sans'] font-semibold text-[48.15px] text-[#105D48] text-left mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[68px]">
        {newsItems.map((item) => (
          <Link
            key={item.id}
            href="/news"
            className="flex flex-col group cursor-pointer"
          >
            <div className="w-full aspect-[313/263] rounded-[14.2px] border border-[#D9D9D9] shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden relative group-hover:shadow-xl transition-shadow duration-300">
              <img
                src="/dummyNews.png"
                alt={item.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-[35px] flex justify-center px-4">
              <p className="text-[20px] font-extrabold text-[#105D48] text-center leading-tight font-sans">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ReadOtherNews;