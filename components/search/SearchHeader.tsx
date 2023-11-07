'use client';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';
import React from 'react';

const SearchHeader = () => {
  const router = useRouter();
  const arrowStyle = {
    fontSize: '1.7rem',
    margin: '0 10px',
    cursor: 'pointer',
    color: '#333',
  };

  const searchIconStyle = {
    position: 'absolute',
    top: '10px',
    left: '20px',
    fontSize: '1.1rem',
  };

  const [nowKeyword, setKeyword] = useState('')

  //검색할 때 마다 로컬스토리지에 검색어 저장
  const formSearchHandler = (e: React.FormEvent) => {
    e.preventDefault()

    //로컬스토리이지에서 데이터 가져오기
    const items = localStorage.getItem('recentSearchKeywords')
    const recent = items ? JSON.parse(items) : []

    //중복제거
    const setObj = new Set([nowKeyword, ...recent])
    //배열로 다시 변환
    const result = Array.from(setObj)
    
    const jsonData = JSON.stringify(result)
    
    localStorage.setItem('recentSearchKeywords', jsonData)
    router.push(`/search/searchResult/?searchKeyword=${nowKeyword}`)
  }

  return (
    <header className="fixed top-0 left-0 w-full h-[50px] flex justify-between items-center bg-white z-50">
      <MdArrowBackIosNew style={arrowStyle} onClick={() => router.back()} />
      <form onSubmit={formSearchHandler} className="flex-1 px-[10px] relative">
        <FiSearch style={searchIconStyle} />
        <input
          className="border rounded-[10px] border-slate-400 w-[100%] p-[8px] pl-[30px] text-[0.8rem]"
          type="text"
          placeholder="검색어를 입력해 주세요."
          onChange={(e) => setKeyword(e.target.value)}
        />
      </form>
    </header>
  );
};

export default SearchHeader;
