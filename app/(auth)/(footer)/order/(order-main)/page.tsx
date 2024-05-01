'use client';
import TabMenu from '@/components/common/TabMenu';
import React, { useState, useEffect } from 'react';
import DeliveryOrderList from '@/components/order/list/delivery/deliveryOrderList';
import YomartOrderList from '@/components/order/list/yomart/page';

/**
 * [Page]
 * @memberof /order
 * @member DeliveryOrderList, YomartOrderList
 * Order Page 에서 Tab선택과 그에 따른 화면 분기를 담당(delivery or yomart)
 */

const tabData = {
  left: '배달/포장',
  right: '요마트/요편의점' };

const OrderList = () => {
  const [tab, setTab] = useState('left');

  const handleGetSelected = (selectedTab: string) => {
    setTab(selectedTab);
  };

  return (
    <div className="bg-grey1">
      <TabMenu
        data={tabData}
        selected={tab}
        handleGetSelected={handleGetSelected}
      ></TabMenu>
      {
        tab === 'left' ? 
        <DeliveryOrderList /> : 
        <YomartOrderList />
      }
    </div>
  );
};

export default OrderList;


