'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const LatestKeyword = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem('recentSearchKeywords');
    const keywordData = item ? JSON.parse(item) : [];
    setKeywords(keywordData);
  }, []);

  const keywordDelete = (index: number) => {
    const updatedKeywords = keywords.filter((_, i) => i !== index);
    setKeywords(updatedKeywords);
    const jsonData = JSON.stringify(updatedKeywords);
    localStorage.setItem('recentSearchKeywords', jsonData);
  };

  const allDelete = () => {
    localStorage.removeItem('recentSearchKeywords');
    setKeywords([]);
  };

  return (
    <>
      {keywords.length > 0 && (
        <div className="px-[20px]">
          <div className="flex justify-around items-center">
            <h2 className="gap-2 w-full h-[50px] flex justify-start items-center bg-white text-[1.25rem] font-bold">
              최근 검색어
            </h2>
            <span
              className="text-[0.8rem] whitespace-nowrap text-slate-400 cursor-pointer"
              onClick={allDelete}
            >
              전체삭제
            </span>
          </div>
          <div className="w-full overflow-hidden overflow-x-auto no-scroll">
            <div className="flex gap-2">
              {keywords.map((keyword, i) => (
                <div
                  key={i}
                  className="flex gap-1 px-[8px] py-[6px] border rounded-3xl border-slate-300"
                >
                  <Link
                    href={`/search/searchResult/?searchKeyword=${keyword}`}
                    className="cursor-pointer whitespace-nowrap"
                  >
                    {keyword}
                  </Link>
                  <i
                    className="text-[2rem] relative cursor-pointer w-[20px] h-[20px]"
                    onClick={() => keywordDelete(i)}
                  >
                    <div className="absolute w-[0.8rem] h-[1px] bg-slate-600 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
                    <div className="absolute w-[0.8rem] h-[1px] bg-slate-600 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]"></div>
                  </i>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .no-scroll {
              -ms-overflow-style: none;
            }
            .no-scroll::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default LatestKeyword;
