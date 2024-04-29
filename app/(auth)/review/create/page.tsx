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

const ReviewCreate = () => {
  const ratings = useRecoilValue(ratingAtom)
  const params = useSearchParams();

  const orderId = params.get('orderId');
  const shopId = params.get('shopId');
  const shopName = params.get('shopName');

  //params 가 유효하지 않게 들어왔을 때를 처리해야 할까?
  if(!orderId || !shopId || !shopName){
    return 0;
  }

  const handleCreateReview = async () => {
    const reviewData = {
      orderId: orderId,
      tasteScore: ratings.taste,
      quantityScore: ratings.amount,
      deliveryScore: ratings.delivery,
      content: "message",
      shopId: shopId,
      shopName: shopName,
    }
    console.log(reviewData)
    console.log(typeof reviewData.orderId)
    console.log(typeof reviewData.shopId)
    const res = await postReview(reviewData)
    console.log(res)
    // ratingAtom에서 가져온 ratings 의 값을 서버로 전송해야함. (api문서 문제로 확인 불가능-작업보류)
    // dynamic routing -> query parameter 변경중
  }

  console.log(ratings)
  return (
    <>
      <div>울엄마김치찜 오창점</div>
      <div>목살반삼겹살 어쩌구 x1</div>
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
      <div>
        <div>상세 리뷰 : 메시지 박스</div>
        <div>이미지 등록 3개</div>
      </div>
      <div onClick={handleCreateReview}>리뷰작성하기버튼</div>
    </>
  )
}

export default ReviewCreate;