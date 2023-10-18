import ListSwiper from './ListSwiper';

const MyOrderedEateries = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-black tracking-tight py-4">
        내가 주문한 맛집
      </h2>
      <ListSwiper />
    </div>
  );
};

export default MyOrderedEateries;
