'use client';
/**
 * [Page]
 * 이 페이지로 이동할 때, orderId를 하위 주소로서 포함해야 함 (create/[orderId])
 * orderId에 해당하는 주문의 리뷰를 작성하고 서버로 전송하는 페이지
 */

import Stars from "@/components/common/Stars";
import { ratingAtom } from "@/recoil/review";
import { useRecoilValue } from "recoil";
import { useSearchParams, useServerInsertedHTML } from "next/navigation";
import { postReview } from "@/services/reviewApi";
import { useState } from "react";
import { Handler } from "@/types/types";

const ReviewCreate = () => {
  const [textValue, setTextValue] = useState('');
  const ratings = useRecoilValue(ratingAtom)
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
  console.log(ratings)

  const defaultText = `사진과 함께 리뷰 작성해야 100포인트 적립 가능!\n음식에 대한 솔직한 리뷰를 남겨주세요(10자이상)`

  return (
    <div className="w-full">
      <div>{shopName}</div>
      <div>{menuInfo}</div>
      <div className="flex flex-col items-center">
        <div>이 가게를 추천하시겠어요?</div>
        <Stars subject="overall" size={3}/>
      </div>
      <div>
        <div>이 가게에 대한 상세 평가를 해주세요.</div>
        <div>
          <Stars subject="taste" label="맛" labelSize={1} size={1.2}/>
          <Stars subject="amount" label="양" labelSize={1} size={1.2}/>
          <Stars subject="delivery" label="배달" labelSize={1} size={1.2}/>
        </div>
      </div>
      <div className="p-4">
      <textarea name="textarea" value={textValue} onChange={handleChangeTextArea} placeholder={defaultText}
        className="w-full h-[10rem] p-4 border border-grey2">
      </textarea>
      </div>
      <div onClick={handleCreateReview}>리뷰작성하기버튼</div>
    </div>
  )
}

export default ReviewCreate;