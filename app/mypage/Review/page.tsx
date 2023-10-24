import React, { useState, useEffect } from 'react';
import TabMenu from '@/components/mypage/TabMenu';
import ToggleMenu from '@/components/mypage/ToggleMenu';
import { BsPencil } from "react-icons/bs";
import CardOrder from '@/components/mypage/CardOrder';

const Review = () => {
  return(
    <div className='bg-yogrey2'>
      <TabMenu></TabMenu>
      <div className='p-4 bg-white'>
        <ToggleMenu></ToggleMenu>
      </div>
      <div className='p-4 flex'>
        <p className='mt-1 pr-1'><BsPencil /></p>
        <p className='font-sm font-semibold'>포토리뷰 작성시 <span className='text-yopink'>100 포인트</span>를 드려요.</p>
      </div>
      <CardOrder></CardOrder>
      <CardOrder></CardOrder>
      <CardOrder></CardOrder>
    </div>
  )
}

export default Review;
