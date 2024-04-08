'use client';
import React, { useState, useEffect } from 'react';
import ReviewList from '@/components/review/list';
import ReviewCreate from '@/components/review/create';

/**
 * [Page]
 * @member ReviewList, ReviewCreate
 */

const Review = () => {
  const [cursor, setCursor] = useState('create');

  return(
    <>
      {cursor === 'list' && <ReviewList />}
      {cursor === 'create' && <ReviewCreate />}
    </>
  )

}

export default Review;