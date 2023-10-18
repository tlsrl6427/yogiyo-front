'use client';
import { gridIconList } from '@/lib/commonData';
import { useState, useRef } from 'react';

const MenuList = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  const [selectMenu, setSelectMenu] = useState('');

  const handleGrandchildClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (parentRef.current && childRef.current) {
      const grandchildRect = event.currentTarget.getBoundingClientRect();
      const parentRect = parentRef.current.getBoundingClientRect();

      const childCurrentScroll = childRef.current.scrollLeft;

      // 화면 중앙으로 옮기기 위한 계산
      const scrollAmount =
        childCurrentScroll +
        grandchildRect.left -
        parentRect.left -
        parentRect.width / 2 +
        grandchildRect.width / 2;

      childRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      ref={parentRef}
      className="w-full border-b overflow-hidden relative z-10"
    >
      <div
        ref={childRef}
        className="no-scroll top-0 left-0 overflow-x-auto h-[50px] flex px-[20px] items-center gap-4 text-sm absoulte bg-white"
      >
        {gridIconList.map((menu, i) => (
          <p
            key={i}
            onClick={(e) => {
              handleGrandchildClick(e), setSelectMenu(menu);
            }}
            className={`flex items-center whitespace-nowrap cursor-pointer ${
              selectMenu === menu
                ? 'text-black font-extrabold border-b-[3px] border-black h-[100%] leading-[100%]'
                : 'text-slate-500'
            }`}
          >
            {menu}
          </p>
        ))}
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
  );
};

export default MenuList;
