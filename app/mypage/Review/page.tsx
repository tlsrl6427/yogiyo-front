import React, { useState, useEffect } from 'react';
import TabMenu from '@/components/mypage/TabMenu';
import ToggleMenu from '@/components/mypage/ToggleMenu';

const Review = () => {
  return(
    <div>
      <TabMenu></TabMenu>
      <div className='p-3'>
        <ToggleMenu></ToggleMenu>
      </div>
    </div>
  )
}

export default Review;
