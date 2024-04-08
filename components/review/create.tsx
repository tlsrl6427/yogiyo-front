/**
 * [Component]
 * @memberof review
 */

import Stars from "../common/Stars";
import { ratingAtom } from "@/recoil/review";
import { useRecoilValue } from "recoil";


const ReviewCreate = () => {
  const ratings = useRecoilValue(ratingAtom)
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
    </>
  )
}

export default ReviewCreate;