'use client';
import React, { useState, useEffect } from 'react';

import { getOrderList } from '@/services/orderAPI';
import { useRecoilState } from 'recoil';
import { orderListAtom } from '@/recoil/order';
import CardOrdered from '@/components/order/list/delivery/cardOrdered';
import SlideOrderList from '@/components/order/list/delivery/slideOderList';

/**
 * [Component]
 * @memberof order/list/delivery(p)
 * @member CardOrdered(c), SlideOrderList(c)
 * @access getOrderList
 */
const DeliveryOrderList = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [lastIdState, setLastIdState] = useState(0);
  const [hasNextState, setHasNextState] = useState(true);
  const [list, setList] = useState<any[]>([]);
  const [isBottom, setIsBottom] = useState(false);

  const [orderList, setOrderList] = useRecoilState(orderListAtom)

  useEffect(() => {
    if (isBottom || isInitialLoad) {
      if (isInitialLoad) setIsInitialLoad(false);
      dataFetch();
      console.log('render-useEffect');
      console.log(`${isInitialLoad}, ${isBottom}`);
      console.log('=================');
    }
  }, [isBottom]);

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
      <SlideOrderList />
      <CardOrdered />
    </div>
  );
};

export default DeliveryOrderList;