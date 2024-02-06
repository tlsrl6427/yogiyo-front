'use client';
import { useRouter } from 'next/navigation';
import { SlArrowLeft, SlMagnifier } from 'react-icons/sl';
import { useState, useEffect } from 'react';
import type { shopInfoType } from '@/types/types';

interface Props {
  shopInfo?: shopInfoType
}


const DetailHeader = ({shopInfo} : Props) => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setIsScrolled(position > 200);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 w-full flex justify-between items-center ${
        isScrolled && 'bg-white'
      }`}
    >
      <i className="p-[16px] cursor-pointer" onClick={() => router.back()}>
        <SlArrowLeft
          style={
            isScrolled
              ? { fontSize: '1.4rem', color: '#333' }
              : { fontSize: '1.4rem', color: '#fff' }
          }
        />
      </i>
      {isScrolled && <p className="font-bold text-[1.2rem]">{shopInfo?.name}</p>}
      <i className="p-[16px] cursor-pointer">
        <SlMagnifier
          style={
            isScrolled
              ? { fontSize: '1.4rem', color: '#333' }
              : { fontSize: '1.4rem', color: '#fff' }
          }
        />
      </i>
    </div>
  );
};

export default DetailHeader;
