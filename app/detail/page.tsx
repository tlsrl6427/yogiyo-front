'use client'
import DetailHeader from '@/components/detail/DetailHeader';
import HeadSlider from '@/components/detail/HeadSlider';
import MiddleTitle from '@/components/detail/MiddleTitle';
import SignatureMenuTab from '@/components/detail/SignatureMenuTab';
import DetailMenuList from '@/components/detail/DetailMenuList';
import DetailTabMenu from '@/components/detail/DetailTabMenu';
import { useSearchParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { currentCoord, currentRegionCode, thisAddressId, userInfoAtom } from '@/recoil/state';
import { useState, useEffect } from 'react';
import { shopApi } from '@/services/shopApi';
import type { shopInfoType } from '@/types/types';

const Detail = () => {
  const searchParams = useSearchParams();
  const shopId = searchParams.get('id');
  const [shopInfo, setShopInfo] = useState<shopInfoType>()

  // 로그인 유무
  const userInfo = useRecoilValue(userInfoAtom);
  // 현재위치 법정동 코드
  const curRegionCode = useRecoilValue(currentRegionCode);
  // 로그인 시 세팅된 주소
  const thisAddId = useRecoilValue(thisAddressId);
  // 현재 접속된 좌표값
  const curCoord = useRecoilValue(currentCoord);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await shopApi.getShopInfo(shopId);
        console.log(result)
        setShopInfo(result)
      } catch (error) {
        console.error('컴포넌트 내부 에러', error);
      }
    };
  
    fetchData();
  }, [])


  return (
    <div className="">
      <DetailHeader />
      <HeadSlider />
      <MiddleTitle />
      <div className='border-y-[4px] border-slate-200 ' />
      <DetailTabMenu />
      <SignatureMenuTab />
      <DetailMenuList />
    </div>
  );
};

export default Detail;
