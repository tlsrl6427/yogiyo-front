<<<<<<< HEAD
'use client'
import React, { useState, useEffect } from 'react';
import TabMenu from '@/components/mypage/TabMenu';
import ToggleMenu from '@/components/mypage/ToggleMenu';
import { BsPencil } from "react-icons/bs";
import CardOrder from '@/components/mypage/CardOrder';


const Review = () => {
  const [tabName, setTabName] = useState('deliveryAndTogo')
  const [tabName2, setTabName2] = useState('writeable')
  const [initialLoad, setInitialLoad] = useState(true);

  const handleTab2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    //useEffect[]에서 setInitialLoad(false)하려고 했는데 초기 렌더링이 2번 연속해서 되고 있어서 여기로 옮김
    if(initialLoad) setInitialLoad(false);
    setTabName2(e.target.value)
  }

  return(
    <div className='bg-yogrey'>
      <TabMenu></TabMenu>
      <div className='p-4 bg-white'>
        <ToggleMenu handle={handleTab2Change} initialLoad={initialLoad} name={tabName2}></ToggleMenu>
      </div>
      <div className='p-4 flex'>
        <p className='mt-1 pr-1'><BsPencil /></p>
        <p className='font-sm font-semibold'>포토리뷰 작성시 <span className='text-yopink'>100 포인트</span>를 드려요.</p>
      </div>
      {tabName2 === 'writeable' ? 
        <CardOrder name="writeable"></CardOrder> :
        <CardOrder name="written"></CardOrder>
      }
    </div>
  )
}
=======
'use client';
import React, { useState, useEffect } from 'react';
import '/lib/animations.css';

const Review = () => {
  const [selectedTab, setSelectedTab] = useState('deliveryAndTogo');

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTab(e.target.value);
  };

  return (
    <div className="bg-yogrey">
      <div className="flex bg-white pl-4 pr-4">
        <div className="w-[50%]">
          <input
            type="radio"
            id="deliveryAndTogo"
            value="deliveryAndTogo"
            style={{ display: 'none' }}
            checked={selectedTab === 'deliveryAndTogo'}
            onChange={handleTabChange}
          />
          <label htmlFor="deliveryAndTogo">
            <p
              className={`text-center p-3 ${selectedTab === 'deliveryAndTogo' ? 'font-bold' : ''}`}
            >
              배달/포장
            </p>
          </label>
        </div>
        <div className="w-[50%]">
          <input
            type="radio"
            id="yomart"
            value="yomart"
            style={{ display: 'none' }}
            checked={selectedTab === 'yomart'}
            onChange={handleTabChange}
          />
          <label htmlFor="yomart">
            <p className={`text-center p-3 ${selectedTab === 'yomart' ? 'font-bold' : ''}`}>
              요마트
            </p>
          </label>
        </div>
      </div>
      <div className="pl-4 pr-4">
        <div
          className={`flex justify-end ${
            selectedTab === 'deliveryAndTogo'
              ? 'underline-animation-to-left'
              : 'underline-animation-to-right'
          } bg-black h-[3px] w-1/2`}
        ></div>
      </div>
    </div>
  );
};
>>>>>>> 8706a59 ([feat] 리뷰 관리 페이지 메뉴 탭 애니메이션)

export default Review;
