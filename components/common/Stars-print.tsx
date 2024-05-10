'use client'
import React, {useEffect, useState} from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ratingAtom } from "@/recoil/review";
import { useRecoilState } from "recoil";

/**
 * 레이팅 출력용 5개짜리 별
 * @param props (count: number, label?: string, size?: number)
 * @returns 요소 렌더
 */

interface Props {
  count: number,
  label?: string,
  size?: number
}

const PrintStars = (props: Props) => {
  
  const starSize = props.size ? `${props.size}rem` : "2rem" ;
  const starRender = Array(5).fill(null).map((_, index) => {
    if (index < props.count) {
      return (<div className="" key={index}>
        <FaStar size={starSize}/>
      </div>)
    } else {
      return (<div className="" key={index}>
      <FaRegStar size={starSize} />
    </div>)
    }
  });

  return(
    <div className="flex items-center">
      {props.label && <div className={`w-[2.5rem] text-[0.9rem] text-grey5 font-semibold`}>{props.label}</div>}
      <div className="flex text-yellow1">
        {starRender}
      </div>
    </div>
  )
}

export default PrintStars;