import MarketDetailList from '@/components/home/marketList/MarketDetailList';
import MenuList from '@/components/home/marketList/MenuList';
import OptionList from '@/components/home/marketList/OptionList';

const MarketList = () => {
  return (
    <div className="w-full">
      <MenuList />
      <OptionList />
      <MarketDetailList />
    </div>
  );
};

export default MarketList;
