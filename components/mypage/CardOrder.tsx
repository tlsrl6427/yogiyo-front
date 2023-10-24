import React from "react";
import Link from "next/link";
import { BiChevronRight } from 'react-icons/bi';
import { TbTruckDelivery } from "react-icons/tb";

const CardOrder = () => {

  const imagebox = 'w-[70px] h-[70px] bg-yogrey2 rounded-md overflow-hidden';
  const whiteButton ='text-sm pt-2 pb-2 pr-4 pl-4 border border-yogrey2 rounded-md';
  const wraptext = 'overflow-hidden whitespace-nowrap overflow-ellipsis ...';

  return (
    <div className="p-4 mb-2 bg-white">
      <div className="flex">
        <div className="w-1/2 font-semibold">
          <div className="flex text-lg">
            <span>롯데리아-오창점</span>
            <span className="mt-1"><BiChevronRight /></span>
          </div>
          <p className="text-sm text-slate-400">2023.8.29</p>
        </div>
        <div className="w-1/2 relative">
          <p className="absolute right-0 text-xs bg-yogrey2 rounded-md pt-1 pb-1 pr-2 pl-2 font-bold flex">
            <span className="text-sm"><TbTruckDelivery /></span>
            <span className="pl-1">배달주문</span>
          </p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-yogrey2 mt-4 mb-4"></div>
      <div className="flex">
        <div className={`${imagebox}`}></div>
        <div className={`pl-4 pr-4 flex-1 overflow-hidden whitespace-nowrap`}>
          <p className={`overflow-hidden overflow-ellipsis`}>모짜렐라인더버거 어쩌구저쩌구 길면어쩌지</p>
          <p className="text-sm">리뷰 작성 기간 <span className="bold text-yopink">15시간 남음</span></p>
        </div>
        <Link href="/">
          <p className={`${whiteButton}`}>리뷰쓰기</p>
        </Link>
      </div>
    </div>
  )
}

export default CardOrder;