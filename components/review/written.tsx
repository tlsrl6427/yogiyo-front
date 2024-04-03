import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { TbChevronDownLeft } from 'react-icons/tb';

import ShopName from "./shopName";

const Written = () => {
  const [isdetailSpread, setIsDetailSpread] = useState(false);
  const handleDetailSpread = () => {
    setIsDetailSpread(!isdetailSpread);
  };

  const imageBox = 'w-[70px] h-[70px] bg-grey1 rounded-md overflow-hidden';
  const whiteButton = 'text-sm pt-2 pb-2 pr-4 pl-4 border border-grey2 rounded-md';
  const detailBox = `border-grey3 border w-full min-h-[50px] p-2 ${
    isdetailSpread ? '' : 'hidden'
  }`;

  const count = 5; //나중에 서버에서 받기
  const starArray = new Array(count).fill(null);

  return (
    <div className="p-4 mb-2 bg-white">
      <ShopName />
      <div className="flex pt-2 pb-2">
        <div className={`${imageBox}`}></div>
        <div className="pl-4 pr-4 flex-1 overflow-hidden whitespace-nowrap">
          <p className="overflow-hidden overflow-ellipsis">
            뼈다귀해장국2인..........??????????????asdfawef.
          </p>
          <div className="flex">
            {starArray.map((_, index) => (
              <AiFillStar fill="#FDC912" className="" key={index} />
            ))}
          </div>
          <div className="flex">
            <span>맛</span>
            <AiFillStar fill="#FDC912" className="mt-[5px] pr-1 pl-1 w-auto" />
            <span className="text-yellow1 pr-2">{count}</span>

            <span>양 </span>
            <AiFillStar fill="#FDC912" className="mt-[5px] pr-1 pl-1 w-auto" />
            <span className="text-yellow1 pr-2">{count}</span>

            <span>배달 </span>
            <AiFillStar fill="#FDC912" className="mt-[5px] pr-1 pl-1 w-auto" />
            <span className="text-yellow1">{count}</span>
          </div>
        </div>
        <div className="text-sm text-grey4">삭제</div>
      </div>
      <div className="pt-2 pb-2 w-full">
        <div className="h-[200px] bg-grey1"></div>
      </div>
      <div className="pt-2 pb-2 w-full">
        <div className="pb-1.5">언제 먹어도 맛있 어쩌구</div>
        <div className="text-grey4 pb-2">고기듬뿍돼지김치찌개</div>
      </div>
      <div className="pt-2 pb-2 w-full">
        <div className="flex">
          <label htmlFor="detail" className="pb-2 text-sm text-grey5">
            주문 옵션 보기
          </label>
          <button id="detail" onClick={handleDetailSpread} className="pl-1 mb-[0.3rem] text-sm">
            {isdetailSpread ? <BsChevronUp /> : <BsChevronDown />}
          </button>
        </div>
        <div className={`${detailBox}`}>
          <p>고기듬뿍돼지김치찌개</p>
          <Obtion name="오잉 " content="이게되네" />
        </div>
      </div>
    </div>
  );
};

export default Written;

export interface MenuOption {
  name: string;
  content: string;
}
const Obtion = (option: MenuOption) => {
  return (
    <div className="flex text-grey4 text-sm">
      <TbChevronDownLeft className="pr-1 text-xl" />
      <p className="">{`${option.name} : ${option.content}`}</p>
    </div>
  );
};