'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/common/Header';
import { FaStar } from "react-icons/fa";
import PrintStars from '@/components/common/Stars-print';
import CustomCheckbox from '@/components/common/CustomCheckBox';

/**
 * [Page]
 * 해당 상점의 전체 리뷰를 보여줌
 * @todo: ui만들어야함
 */

const ShopReview = () => {
  const [viewPhotoReview, setViewPhotoReview] = useState(false);

  const searchParams = useSearchParams();
  const shopId = searchParams.get('id');
  const shopName = searchParams.get('name');

  if(!shopId || !shopName){
    console.log('shop info error')
    return (<div></div>)
  }

  const handleCheckboxChange = () => {
    setViewPhotoReview(!viewPhotoReview)
  }

  return (
    <div className="bg-grey1">
      <Header type={1} label={shopName} />
      <div className='flex items-center py-8 mt-[2px] bg-white'>
        <div className='flex w-[50%] text-right text-yellow1 items-center justify-end pr-8'>
          <FaStar size={'3rem'}/>
          <span className='text-black text-[3rem]'>5.0</span>
        </div>
        <div>
          <PrintStars count={3} label='맛' size={1} />
          <PrintStars count={3} label='양' size={1} />
          <PrintStars count={3} label='배달' size={1} />
          <span className='pl-[2.5rem] text-[0.85rem]'>{`리뷰${0} 사장님댓글${0}`}</span>
        </div>
      </div>
      <div className='flex p-4 mt-2 bg-white'>
        <div className='flex' onClick={handleCheckboxChange}>
          <CustomCheckbox checked={viewPhotoReview}/>
          <label>사진리뷰 보기</label>
        </div>
        <div className='flex-1 text-right'>최신순</div>
      </div>
    </div>
  );
};

export default ShopReview;