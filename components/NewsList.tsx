import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: number;
}

const NewsList: React.FC = () => {
  // Dummy data array
  const newsItems: NewsItem[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <div className="flex flex-col gap-8 lg:gap-12 2xl:gap-[123px] mt-12 2xl:mt-[100px]">
      {newsItems.map((item) => (
        <Link 
          key={item.id} 
          href="/news"
          className="flex flex-row gap-8 lg:gap-12 2xl:gap-[123px] items-start w-full group cursor-pointer"
        >
          {/* Left Part: Image & Green Line */}
          <div className="flex flex-col items-center gap-6 2xl:gap-[43px] w-[30%] max-w-[300px] 2xl:max-w-[441px]">
            {/* Image */}
            <div className="relative w-full aspect-[6/5] rounded-[20px] overflow-hidden">
              <Image
                src="/dummyNews.png"
                alt={`News ${item.id}`}
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Green Line */}
            <div className="w-[70%] h-4 rounded-full bg-[#105D48]" />
          </div>

          {/* Right Part: Text Box */}
          <div className="flex-1 min-h-[250px] rounded-[30px] border border-[#D9D9D9] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center p-6 2xl:p-[41px]">
            <p className="font-['Open_Sans'] text-lg lg:text-xl 2xl:text-[36px] text-[#105D48] leading-[1.5]">
              SRE UI as a sustainable organization with{' '}
              <strong>focus on renewable energy</strong> that{' '}
              <strong>nurtures member growth, enables impactful collaborations,</strong>{' '}
              and{' '}
              <strong>advances positive influences for continuous change.</strong>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NewsList;
