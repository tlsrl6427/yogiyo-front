import Link from 'next/link';
import ShopName from './shopName';

const Writable = () => {
  const imagebox = 'w-[70px] h-[70px] bg-grey1 rounded-md overflow-hidden';
  const whiteButton = 'text-sm pt-2 pb-2 pr-4 pl-4 border border-grey2 rounded-md';

  const handleCreate = () => {
    return 0;
  }

  return (
    <div className="p-4 mb-2 bg-white">
      <ShopName />
      <div className="flex pt-2 pb-2">
        <div className={`${imagebox}`}></div>
        <div className={`pl-4 pr-4 flex-1 overflow-hidden whitespace-nowrap`}>
          <p className={`overflow-hidden overflow-ellipsis`}>
            모짜렐라인더버거 어쩌구저쩌구 길면어쩌지
          </p>
          <p className="text-sm">
            리뷰 작성 기간 <span className="bold text-pink1">15시간 남음</span>
          </p>
        </div>
        <Link href="/">
          <p className={`${whiteButton}`} onClick={handleCreate}>리뷰쓰기</p>
        </Link>
      </div>
    </div>
  );
};

export default Writable;

