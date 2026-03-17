import React from 'react';
import ArticleHeader from '@/components/ArticleHeader';
import ArticleBody from '@/components/ArticleBody';
import ReadOtherNews from '@/components/ReadOtherNews';
import SidebarNews from '@/components/SidebarNews';

const NewsPage: React.FC = () => {
  return (
    <main className="w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-12 xl:px-24 2xl:px-[175px] py-12">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-10 2xl:gap-[60px]">
        <div className="lg:col-span-7 lg:border-r lg:border-[#D9D9D9] lg:pr-6 2xl:pr-8">
          <ArticleHeader />
          <ArticleBody buttonText="All Articles" buttonLink="/all-articles" />
        </div>

        <div className="lg:col-span-3">
          <SidebarNews title="NEW ARTICLE" />
        </div>
      </div>

      <ReadOtherNews title="READ OTHER ARTICLES" />
    </main>
  );
};

export default NewsPage;