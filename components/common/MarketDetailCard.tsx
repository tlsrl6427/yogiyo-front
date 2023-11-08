import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';

const MaketDetailCard = (info: any) => {
  return (
    <Link
      href=""
      className="mt-[20px] ml-[20px] mr-[20px] pb-[20px] border-b border-slate-200 flex gap-4"
    >
      <div className="w-[90px] h-[90px] rounded-xl bg-slate-300">
        <img></img>
      </div>
      <div>
        <div className="title_container flex justify-start gap-2 rounded-md">
          {/* 나중에 요기요 아이콘 찾으면 여기다 넣기 */}
          {/* <i>yogiyo_icon</i> */}
          <p className="text-xl font-bold">{info.name || '가게 이름'}</p>
        </div>
        <div className="flex justify-start items-center gap-1">
          <AiFillStar fill="#FDC912" className="text-2xl" />
          <p className="text-base font-bold">{info.rate || '5.0'}</p>
        </div>
        <div className="text-sm flex gap-2">
          <p>{info.delay || '30~35분'}</p>
          <span>배달요금</span>
          <p className="font-bold">{info.delFee || '3,000원'}</p>
        </div>
      </div>
    </Link>
  );
};

export default MaketDetailCard;
