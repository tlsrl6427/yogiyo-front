'use client';

import { getOrderDetail } from '@/services/orderAPI';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';

import Receipt from '@/components/order/detail/receipt';
import ShopInfo from '@/components/order/detail/shopInfo';
import DeliState from '@/components/order/detail/deliState';

const OrderDetail = () => {
  //const orderStateMap = ['주문확인','조리중','배달중','배달완료'];
  //const order = '' // api 결과로 가져온 데이터
  const user = useRecoilValue(userInfoAtom);
  const queryString = useSearchParams();
  const id = queryString.get('id');

  const [itemList, setItemList] = useState([])
  const [orderInfo, setOrderInfo] = useState([]);

  if (!id) {
    const router = useRouter();
    //router.push(`/error?code=002`);
  }

  useEffect(() => {
    console.log(`orderId: ${id}`);
    if(id){
      handleGetOrderDetail(id);
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
