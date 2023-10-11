import { AiFillStar } from 'react-icons/ai';
import type { MaketInfoType } from '@/types';

  const MarketInfoCard = ({ info }: MaketInfoType) => {
    return (
      <div className="w-[170px] h-[300px] flex flex-col gap-2">
        <div className="img_container w-full h-[170px] flex justify-center items-center overflow-hidden rounded-xl">
          {info.img ? <img className="w-full h-full" src={info.img} /> : <div className="w-full h-full bg-black" />}
        </div>
        <div className="title_container flex justify-start gap-1.5 rounded-md">
          {/* 나중에 요기요 아이콘 찾으면 여기다 넣기 */}
          <i>{/*yogiyo_icon*/}</i>
          <p className="text-xl font-bold">{info.name}</p>
        </div>
        <div className="rate_container flex justify-start items-center gap-1.5">
          <AiFillStar fill="#FDC912" className="text-2xl" />
          <p className='text-lg font-bold'>{info.rate}</p>
        </div>
        <div className="delay">
          <p>{info.delay}</p>
        </div>
        <div className="delFee flex items-center gap-2">
          <span>배달요금</span>
          <p className="font-bold">{info.delFee}</p>
        </div>
      </div>
    )
  }

  export default MarketInfoCard
