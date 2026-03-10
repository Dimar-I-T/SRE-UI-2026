"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export type Article = {
  article_id: string
  title: string
  cover_url: string
  content: string
  created_at: string
  updated_at: string
}

export default function ArticesPage() {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState<null | number>(null);
    const articles = [
        {
            id: 1,
            title: "First Article",
            image: "https://placehold.co/800?text=article1&font=roboto",
        },
        {
            id: 2,
            title: "Second Article",
            image: "https://placehold.co/800?text=article2&font=roboto",
        },
        {
            id: 3,
            title: "Third Article",
            image: "https://placehold.co/800?text=article3&font=roboto",
        },
    ];

    const handleCreate = () => {
        router.push("/admin/articles/create");
    }

    return (
        <div className="flex min-h-screen w-full  items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-40 py-20">
            <div className="relative w-full max-md:w-full h-125 flex justify-start items-center  flex-col gap-y-10">
                <div className="absolute  right-0 top-0 flex flex-col gap-y-2">
                    <button 
                        className="rounded-full bg-green1 w-20 h-20 max-md:w-10 max-md:h-10 flex justify-center items-center transition-transform duration-200 hover:scale-104"
                        onClick={handleCreate}    
                    >
                        <span className="text-[80px] max-md:text-[20px] font-light">+</span>
                    </button>
                    <h1 className="font-bold text-[20px] max-md:text-[12px] text-center text-green1">
                        Create
                    </h1>
                </div>

                <h1 className="text-[60px] w-3/4 max-md:text-[40px] font-bold text-center text-green1">
                    Article Management
                </h1>

                <div className="relative w-full h-auto flex justify-center items-center flex-wrap flex-row gap-x-20 gap-y-5 mt-5">
                    {articles.map((article) => (
                        <div key={article.id} className="w-[260px]">
                            <div
                                className="relative h-[180px] rounded-xl overflow-hidden bg-gray-300 bg-cover bg-center"
                                style={{ backgroundImage: `url(${article.image})` }}
                            >
                                <button
                                    onClick={() =>
                                        setOpenMenu(openMenu === article.id ? null : article.id)
                                    }
                                    className="absolute top-3 right-3 bg-gray-400 rounded-full px-2 py-1"
                                >
                                    ⋮
                                </button>

                                {openMenu === article.id && (
                                    <div className="absolute top-10 right-3 bg-gray-500 shadow-lg rounded-lg text-sm">
                                        <button className="block px-4 py-2 hover:bg-gray-600 hover:rounded-lg w-full text-left">
                                            Set as Recommendation
                                        </button>
                                    </div>
                                )}

                                <div className="absolute bottom-3 left-0 right-0 flex justify-between px-4">
                                    <button className="bg-green1 w-[94px] text-white px-5 py-1 rounded-full text-sm font-light">
                                        EDIT
                                    </button>

                                    <button className="bg-red-500 w-[94px] text-white px-5 py-1 rounded-full text-sm font-light">
                                        DELETE
                                    </button>
                                </div>
                            </div>

                            <p className="mt-3 text-center text-gray-600 font-medium">
                                {article.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}