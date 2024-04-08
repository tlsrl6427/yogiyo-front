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

const Stars = (props: Props) => {
  const [ratings, setRatings] = useRecoilState(ratingAtom)
  const [star, setStar] = useState(0);
  
  useEffect(()=>{
    if(props.subject === 'overall') setStar(ratings.overall)
    if(props.subject === 'amount') setStar(ratings.amount)
    if(props.subject === 'taste') setStar(ratings.taste)
    if(props.subject === 'delivery') setStar(ratings.delivery)
  },[ratings])
  
  const starSize = props.size ? `${props.size}rem` : "1rem" ;
  const labelWidth = props.labelSize ? `${props.labelSize * 2}rem` : "2rem" ;
  const labelSize = props.labelSize ? `${props.labelSize}rem` : "1rem" ;

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
    //setStar(index+1);
    setRatings(prevState => {
      return {
        ...prevState,
        [props.subject]: index+1
      };
    });
  }

  return(
    <div className="flex">
      {props.label && <div style={{ width: labelWidth, fontSize: labelSize }}>{props.label}</div>}
      <div className="flex">
        {starRender}
      </div>
    </div>
  )
}

export default Stars;