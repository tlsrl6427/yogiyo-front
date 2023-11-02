'use client';
import { gridIconList } from '@/lib/commonData';
import { useState, useRef, useEffect } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useCallback } from 'react';


const MenuList = () => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const queryMenu = searchParams.get('menu')
  const [selectMenu, setSelectMenu] = useState(queryMenu);

  //현재 query값 변경 함수
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  const queryHandler = (menuname: string) => {
    router.push(pathname + '?' + createQueryString('menu', menuname))
  }

  //component 첫 진입 시 메뉴 하이라이트
  useEffect(() => {
    handleGrandchild(null)
  }, [queryMenu])

  //query값에 따른 메뉴 이동
  const handleGrandchild = (event: React.MouseEvent<HTMLDivElement>|null) => {
    if (parentRef.current && childRef.current) {

      let grandchildRect : any
      let parentRect : any

      //클릭이벤트로 메뉴 이동할 경우
      if(event){
        grandchildRect = event.currentTarget.getBoundingClientRect();
        parentRect = parentRef.current.getBoundingClientRect();

      //첫 화면 진입일 경우
      }else{
        const grandchild = Array.from(childRef.current.children).find(
          child => child.textContent === queryMenu
        );
        if(grandchild){
          grandchildRect = grandchild.getBoundingClientRect();
          parentRect = parentRef.current.getBoundingClientRect();
        }
      }

      const childCurrentScroll = childRef.current.scrollLeft;

      //메뉴를 화면 중앙으로 옮기기 위한 계산
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
    <div ref={parentRef} className="w-full border-b overflow-hidden fixed z-10 top-[50px] left-0">
      <div
        ref={childRef}
        className="no-scroll top-0 left-0 overflow-x-auto h-[50px] flex px-[20px] items-center gap-4 text-sm absoulte bg-white"
      >
        {gridIconList.map((menu, i) => (
          <p
            key={i}
            onClick={(e) => {
              handleGrandchild(e), setSelectMenu(menu), queryHandler(menu);
            }}
            className={`flex text-[1rem] items-center whitespace-nowrap cursor-pointer font-bold ${
              selectMenu === menu
                ? 'text-black border-b-[3px] border-black h-[100%] leading-[100%]'
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
