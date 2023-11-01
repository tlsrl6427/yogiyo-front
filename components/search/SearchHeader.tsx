'use client';
import { useRouter } from 'next/navigation';
import { MdArrowBackIosNew } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';

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
  return (
    <header className="fixed top-0 left-0 w-full h-[50px] flex justify-between items-center bg-white z-50">
      <MdArrowBackIosNew style={arrowStyle} onClick={() => router.back()} />
      <form className="flex-1 px-[10px] relative">
        <FiSearch style={searchIconStyle} />
        <input
          className="border rounded-[10px] border-slate-400 w-[100%] p-[8px] pl-[30px] text-[0.8rem]"
          type="text"
          placeholder="검색어를 입력해 주세요."
        />
      </form>
    </header>
  );
};

export default SearchHeader;