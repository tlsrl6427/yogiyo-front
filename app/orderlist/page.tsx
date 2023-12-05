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
    <div className="bg-yogrey h-screen">
      <TabMenu 
        tabData={tabData}
        isInitialLoad={isInitialLoad}
        selectedTab={tab} 
        handleGetSelected={handleGetSelected}
        ></TabMenu>
        <SlideOrderList />
    </div>
  )
}

export default OrderList;


const SlideOrderList = () => {
  const dummyList = [
    {
      name: '가나다 커피집',
      min_delivery: 0,
      max_delivery: 3500, 
    },
    {
      name: '맛없는 돈까스집',
      min_delivery: 0,
      max_delivery: 4000, 
    }
  ]
  return(
    <div className="border-b pl-4 pr-4 pb-4">
      <div className="pt-3 pb-3 font-semibold">내가 주문한 맛집</div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex w-fit" >
          {dummyList.map((item)=>{
            return(
            <div className="border rounded-2xl w-[240px] h-[80px] bg-white flex mr-2 overflow-hidden scrollbar">
              <div className="w-[80px] p-[8px]">
                <div className="w-full h-full rounded-[10px] bg-yogrey2"></div>
              </div>
              <div className="pt-[8px] pb-[8px] flex-1">{item.name}</div>
            </div>
            )})
          }
          <div className="w-[240px] h-[80px]">더 보기</div>
        </div>
      </div>
    </div>
  )
}

