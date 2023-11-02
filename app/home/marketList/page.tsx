'use client'
import MarketDetailList from '@/components/home/marketList/MarketDetailList';
import MenuList from '@/components/home/marketList/MenuList';
import OptionList from '@/components/home/marketList/OptionList';
import { useSearchParams } from 'next/navigation'

const MarketList = () => {
  const searchParams = useSearchParams()
  const menu = searchParams.get('menu')
  console.log(menu)

  return (
    <div className="w-full">
      <MenuList />
      <OptionList />
      <MarketDetailList />
    </div>
  );
};

export default MarketList;
