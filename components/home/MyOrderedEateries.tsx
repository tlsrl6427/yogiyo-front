import ListSwiper from './ListSwiper';
import { nanum_Gothic } from '@/lib/font';

const MyOrderedEateries = () => {
  return (
    <div className="p-4">
      <h2 className={`text-xl font-black py-4 tracking-wide ${nanum_Gothic.className}`}>
        내가 주문한 맛집
      </h2>
      {/* <ListSwiper /> */}
    </div>
  );
};

export default MyOrderedEateries;
