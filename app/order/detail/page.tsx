'use client';

import { getOrderDetail } from '@/services/orderAPI';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';
import { orderDetailCursor } from '@/recoil/order';

import Receipt from '@/components/order/detail/receipt';
import ShopInfo from '@/components/order/detail/shopInfo';
import DeliState from '@/components/order/detail/deliState';

const OrderDetail = () => {
  //const orderStateMap = ['주문확인','조리중','배달중','배달완료'];
  //const order = '' // api 결과로 가져온 데이터
  //const user = useRecoilValue(userInfoAtom);
  const [cursor, setCursor] = useRecoilState(orderDetailCursor);

  useEffect(() => {
    console.log(cursor);
    if(cursor){
      handleGetOrderDetail(cursor);
    }else{
      //router.push(`/error?code=002`);
    }
    return () => {
      setCursor(null);
    }
  },[]);

  const handleGetOrderDetail = async (id: string) => {
    const res = getOrderDetail(id);

  }

  return (
    <div className='w-screen min-h-screen bg-grey7'>
      <DeliState />
      <ShopInfo />
      <Receipt />
    </div>
  );
};

export default OrderDetail;
