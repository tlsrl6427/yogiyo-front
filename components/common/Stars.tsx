'use client'
import React, {useEffect, useState} from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ratingAtom } from "@/recoil/review";
import { useRecoilState } from "recoil";

interface Props {
  subject: string,
  size?: number
  label?: string
  labelSize?: number
}

/**
 * 레이팅 입력용 5개짜리 별
 * 상태: 유저의 클릭에 따라 변경, ratingAtom에 저장
 * @param props (subject: overall | amount | taste | delivery, ?label)
 * @returns 요소 렌더
 */

const Stars = (props: Props) => {
  const [ratings, setRatings] = useRecoilState(ratingAtom)
  const [star, setStar] = useState(0);
  
  useEffect(()=>{
    if(props.subject === 'overall') setStar(ratings.overall)
    if(props.subject === 'amount') setStar(ratings.amount)
    if(props.subject === 'taste') setStar(ratings.taste)
    if(props.subject === 'delivery') setStar(ratings.delivery)
  },[ratings])
  
  const starSize = props.size ? `${props.size}rem` : "1.4rem" ;
  const starRender = Array(5).fill(null).map((_, index) => {
    if (index < star) {
      return (<div className="p-[3px]" onClick={() => handleChangeStar(index)} key={index}>
        <FaStar size={starSize}/>
      </div>)
    } else {
      return (<div className="p-[3px]" onClick={() => handleChangeStar(index)} key={index}>
      <FaRegStar size={starSize} />
    </div>)
    }
  });

  const handleChangeStar = (index: number) => {
    setRatings(prevState => {
      return {
        ...prevState,
        [props.subject]: index+1
      };
    });
  }

  return(
    <div className="flex items-center p-2">
      {props.label && <div className={`w-[3.6rem] text-sm pr-4 font-semibold`}>{props.label}</div>}
      <div className="flex">
        {starRender}
      </div>
    </div>
  )
}

export default Stars;