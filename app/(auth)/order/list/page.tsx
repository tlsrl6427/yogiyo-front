'use client';
import TabMenu from '@/components/common/TabMenu';
import React, { useState, useEffect } from 'react';
import { OrderInfo } from '@/types/types';
import { getOrderList } from '@/services/orderAPI';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userInfoAtom } from '@/recoil/state';
import CardOrdered from '@/components/order/list/cardOrdered';
import SlideOrderList from '@/components/order/list/slideOderList';
import { orderListAtom } from '@/recoil/order';

const tabData = {
  left: { id: 'deliveryAndTogo', name: '배달/포장' },
  right: { id: 'yomart', name: '요마트/요편의점' },
};

interface Props {
  orderList: OrderInfo[];
}

const OrderList = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [tab, setTab] = useState(tabData.left.id);

  const [lastIdState, setLastIdState] = useState(0);
  const [hasNextState, setHasNextState] = useState(true);
  const [list, setList] = useState<any[]>([]);
  const [isBottom, setIsBottom] = useState(false);

  const userInfo = useRecoilValue(userInfoAtom);
  const [orderList, setOrderList] = useRecoilState(orderListAtom)

  if(!userInfo.isLogin){
    console.log("로그인 상태가 아닙니다.")
  }else{
    console.log(`${userInfo.nickname} 의 주문내역`);
  }

  const handleGetSelected = (selectedTab: string) => {
    setTab(selectedTab);
    if (isInitialLoad) setIsInitialLoad(false);
    console.log('change');
  };

  useEffect(() => {
    if (isBottom || isInitialLoad) {
      if (isInitialLoad) setIsInitialLoad(false);
      dataFetch();
      console.log('render-useEffect');
      console.log(`${isInitialLoad}, ${isBottom}`);
      console.log('=================');
    }
  }, [isBottom]);

  useEffect(()=>{
    console.log(list)
    console.log(`lastId: ${lastIdState}`)
    console.log(`hasNext: ${hasNextState}`)
  },[list]);

  const dataFetch = async () => {
    const { orderHistories, lastId, hasNext } = await getOrderList(lastIdState);

    setLastIdState(lastId);
    setHasNextState(hasNext);
    setOrderList(orderHistories);

    console.log(orderHistories)

    const newItems = Array.isArray(orderHistories) ? orderHistories : [orderHistories];
    setList((p) => [...p, ...newItems]);
  };

  return (
    <div className="bg-grey1">
      <TabMenu
        tabData={tabData}
        isInitialLoad={isInitialLoad}
        selectedTab={tab}
        handleGetSelected={handleGetSelected}
      ></TabMenu>
      <SlideOrderList />
      <CardOrdered />
    </div>
  );
};

export default OrderList;


