import React from 'react';
import Link from 'next/link';

type SidebarNewsItem = {
  id: number;
  title: string;
};

interface SidebarProps {
  title: string;
}

const sidebarNewsItems: SidebarNewsItem[] = [
  { id: 1, title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE' },
  { id: 2, title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE' },
  { id: 3, title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE' },
  { id: 4, title: 'TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE' },
];

const SidebarNews: React.FC<SidebarProps> = ({ title }) => {
  return (
    <aside className="flex flex-col w-full">
      <h2 className="text-3xl xl:text-4xl font-bold text-[#105D48] mb-6 whitespace-nowrap">
        {title}
      </h2>

      <div className="flex flex-col gap-6 xl:gap-8 2xl:gap-[32px]">
        {sidebarNewsItems.map((item) => (
          <Link key={item.id} href="/news" className="block w-full">
            <div className="flex flex-row gap-4 2xl:gap-[21px] items-start w-full group cursor-pointer">
              <div className="w-[100px] xl:w-[130px] 2xl:w-[163px] shrink-0 aspect-[163/92] rounded-[7.39px] border border-[#D9D9D9] overflow-hidden shadow-sm">
                <img
                  src="/dummyNews.png"
                  alt="News thumbnail"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 min-w-0 w-full">
                <h3 className="text-base xl:text-lg 2xl:text-[20px] font-extrabold text-[#105D48] leading-snug break-normal">
                  TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SidebarNews;