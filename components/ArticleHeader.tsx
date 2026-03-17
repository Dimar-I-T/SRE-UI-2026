import React from 'react';

const ArticleHeader: React.FC = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-['Open_Sans'] font-extrabold text-3xl lg:text-[45px] text-[#105D48] leading-snug">
        TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE TITLE
      </h1>

      <div className="mt-4 flex flex-col gap-1 font-['Open_Sans'] font-semibold text-base lg:text-[19px] text-[#105D48]">
        <p>Author</p>
        <p>DD/MM/YYYY • XX min read</p>
      </div>

      <div className="mt-8">
        <img
          src="/dummyTitle.png"
          alt="Article main"
          className="w-full h-[300px] lg:h-[500px] rounded-none object-cover"
        />
      </div>
    </div>
  );
};

export default ArticleHeader;