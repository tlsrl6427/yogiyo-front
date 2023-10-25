import ListSwiper from './ListSwiper';
import { nanum_Gothic } from '@/lib/font';

const NewEateries = () => {
  return (
    <div className="p-4">
      <h2 className={`text-xl font-black py-4 tracking-wide ${nanum_Gothic.className}`}>
        새로 입점한 맛집
      </h2>
      <ListSwiper />
    </div>
  );
};

export default NewEateries;
