import MaketDetailCard from '@/components/common/MarketDetailCard';

const dummyCon = {
  id: 0,
  name: '롯데리아',
  callNumber: '0',
  address: '어디동 어디시',
  categories: '',
  img: '',
};

const dummy = new Array(10).fill(dummyCon);

const MarketDetailList = () => {
  return (
    <div className="flex flex-col">
      {dummy?.map((info, i) => <MaketDetailCard key={i} info={info} />)}
    </div>
  );
};

export default MarketDetailList;
