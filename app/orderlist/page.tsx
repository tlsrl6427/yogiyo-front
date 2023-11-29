'use client'
import TabMenu from "@/components/common/TabMenu";
import React, {useState, useEffect} from 'react';


const tabData = {
  left: {id: 'deliveryAndTogo', name: '배달/포장'},
  right: {id: 'yomart', name : '요마트/요편의점'}
}

const OrderList = () => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [tab, setTab] = useState(tabData.left.id);

  const handleGetSelected = (selectedTab: string) =>{
    setTab(selectedTab)
    if(isInitialLoad) setIsInitialLoad(false)
    console.log("change")
  }

  return (
    <div>
      <TabMenu 
        tabData={tabData}
        isInitialLoad={isInitialLoad}
        selectedTab={tab} 
        handleGetSelected={handleGetSelected}
        ></TabMenu>
    </div>
  )
}

export default OrderList;