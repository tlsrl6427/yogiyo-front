
import { BiChevronRight } from 'react-icons/bi';
import { TbTruckDelivery } from 'react-icons/tb';

const ShopName = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex text-lg">
            <span className="font-semibold">롯데리아-오창점</span>
            <span className="mt-1">
              <BiChevronRight />
            </span>
          </div>
          <p className="text-[1rem] text-grey3 font-[400]">2023.8.29</p>
        </div>
        <div className="w-1/2 relative">
          <p className="absolute right-0 text-xs bg-grey1 rounded-md pt-1 pb-1 pr-2 pl-2 font-bold flex">
            <span className="text-sm">
              <TbTruckDelivery />
            </span>
            <span className="pl-1">배달주문</span>
          </p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-grey1 mt-4 mb-4"></div>
    </div>
  );
};

export default ShopName;
