'use client';
/**
 * [Page]
 * 리뷰 작성 페이지
 * 쿼리 파라미터 필요
 * @params {orderId, shopId, shopName, menuName, coumt, tcount}
 */

import Stars from "@/components/common/Stars";
import { ratingAtom } from "@/recoil/review";
import { useRecoilState } from "recoil";
import { useSearchParams } from "next/navigation";
import { postReview } from "@/services/reviewApi";
import { useEffect, useState } from "react";
import PrevPageC from "@/components/common/PrevPageC";

const ReviewWrite = () => {
  const [textValue, setTextValue] = useState('');
  const [ratings, setRatings] = useRecoilState(ratingAtom);
  const params = useSearchParams();

  const orderId = params.get('orderId');
  const shopId = params.get('shopId');
  const shopName = params.get('shopName');
  const menuName = params.get('menuName');
  const count = params.get('count');
  const tcount = params.get('tcount');

  //params 가 유효하지 않게 들어왔을 때를 처리해야 할까?
  if(!orderId || !shopId || !shopName || !menuName || !count || !tcount){
    return 0;
  }

  let menuInfo = `${menuName} x ${count}`;
  if(parseInt(tcount) > 1) menuInfo += `외 ${tcount}건`;

  const handleCreateReview = async () => {
    const reviewData = {
      orderId: orderId,
      tasteScore: ratings.taste,
      quantityScore: ratings.amount,
      deliveryScore: ratings.delivery,
      content: textValue,
      shopId: shopId,
      shopName: shopName,
    }
    const res = await postReview(reviewData)
    console.log(res)
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }
  const defaultText = `사진과 함께 리뷰 작성해야 100포인트 적립 가능!\n음식에 대한 솔직한 리뷰를 남겨주세요(10자이상)`

  useEffect(()=>{
    return(()=>{
      const initialValue = {
        overall: 0,
        amount: 0,
        taste: 0,
        delivery: 0
      }
      setRatings(initialValue)
    })
  },[])

  return (
    <div className="w-full bg-grey1">
      <div className="flex py-4 px-2 bg-white text-[1.1rem] items-center">
        <div><PrevPageC /></div>
        <div className="flex flex-1">
          <p className="w-full font-bold text-center">{shopName}</p></div>
        <div className="w-[28px] h-[28px]"></div>
      </div>
      <div className="mt-0.5 p-6 bg-white">
        <p className="text-center text-grey4">{menuInfo}</p>
      </div>
      <div className="mt-2 p-6 flex flex-col items-center bg-white">
        <div className="font-semibold text-[1.1rem]">이 가게를 추천하시겠어요?</div>
        <Stars subject="overall" size={2.2}/>
      </div>
      <div className="mt-0.5 p-6  bg-white">
        <div className="w-full text-center text-sm text-grey4">이 가게에 대한 상세 평가를 해주세요.</div>
        <div className="flex flex-col items-center p-3">
          <Stars subject="taste" label="맛" />
          <Stars subject="amount" label="양" />
          <Stars subject="delivery" label="배달" />
        </div>
      </div>
      <div className="p-4 bg-white">
        <textarea name="textarea" value={textValue} onChange={handleChangeTextArea} placeholder={defaultText}
          className="w-full h-[10rem] p-4 border border-grey2">
        </textarea>
      </div>
      <div className="w-full p-4 text-center font-bold text-white bg-pink1" onClick={handleCreateReview}>리뷰작성하기버튼</div>
    </div>
  )
}

export default ReviewWrite;