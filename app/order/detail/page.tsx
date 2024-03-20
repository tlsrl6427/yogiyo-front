'use client';

import { getOrderDetail } from '@/services/orderAPI';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';
import { currentAddress } from '@/recoil/address';

import { orderDetailCursor } from '@/recoil/order';

import Receipt from '@/components/order/detail/receipt';
import ShopInfo from '@/components/order/detail/shopInfo';
import DeliState from '@/components/order/detail/deliState';


const OrderDetail = () => {
  //const orderStateMap = ['주문확인','조리중','배달중','배달완료'];
  //const order = '' // api 결과로 가져온 데이터
  //const user = useRecoilValue(userInfoAtom);
  const [cursor, setCursor] = useRecoilState(orderDetailCursor);
  const [shopId, setShopId] = useState('')
  const [shopName, setShopName] = useState('')
  const user = useRecoilValue(userInfoAtom);
  const address = useRecoilValue(currentAddress);

  useEffect(() => {
    console.log(cursor);
    if(cursor){
      handleGetOrderDetail(cursor);
    }else{
      //router.push(`/error?code=002`);
      handleTest()
    }
    return () => {
      setCursor(null);
    }
  },[]);

  const defaultRes = {
    orderId: 139904,
    status: "DONE",
    orderType: "DELIVERY",
    shopName: "종로만두",
    shopId: 333000,
    orderNumber: "39MAR7_244",
    orderTime: "2024-03-20T07:04:39",
    orderItems: [
        {
            createdAt: "2024-03-20T07:04:39",
            updatedAt: "2024-03-20T07:04:39",
            id: 279923,
            price: 5000,
            quantity: 10,
            menuName: "메뉴 1",
            menuId: 1,
            orderItemOptions: [
                {
                    id: 265682,
                    optionName: "옵션 1",
                    price: 1500
                }
            ]
        }
    ],
    totalPrice: 6500,
    deliveryPrice: 1000,
    paymentPrice: 321000,
    paymentType: "CARD",
    address: {
        street: "",
        detail: ""
    },
    requestMsg: "없음",
    requestDoor: true,
    requestSpoon: true,
}

  const handleGetOrderDetail = async (id: string) => {
    const res = await getOrderDetail(id);
    console.log(res.shopId)
    setShopId(`${res.shopId}`)
    setShopName(res.shopName)
  }
  const handleTest = () => {
    const needData = {
      status: defaultRes.status,
      orderType: defaultRes.orderType,
      shopName: defaultRes.shopName,
      shopId: defaultRes.shopId,
      orderNumber: defaultRes.orderNumber,
      orderTime: defaultRes.orderTime,
      foodTotalPrice: defaultRes.totalPrice,
      deliveryPrice: defaultRes.deliveryPrice,
      paymentPrice: defaultRes.paymentPrice,
      yogipassDiscount: 0,
      paymentType: defaultRes.paymentType,
      orderItems: [
        {
          menuName: defaultRes.orderItems[0].menuName,
          quantity: defaultRes.orderItems[0].quantity,
          menuPrice: defaultRes.orderItems[0].price,
          options: [
            {
              optionName: defaultRes.orderItems[0].orderItemOptions[0].optionName,
              optionPrice: defaultRes.orderItems[0].orderItemOptions[0].price,
            }
          ]
        }
      ],
      //
      notes: {
        message: defaultRes.requestMsg,
        spoon: defaultRes.requestSpoon,
        door: defaultRes.requestDoor,
      },
      //
      userPhone: user.phone,
      userAddress1: address,
      userAddress2: address,
    }
    console.log(needData)
  }

  return (
    <div className='w-screen min-h-screen bg-grey7'>
      <DeliState />
      <ShopInfo shopId={shopId} shopName={shopName}/>
      <Receipt />
    </div>
  );
};

export default OrderDetail;
