import { DynamicRoute } from "@/types/types"
import { useEffect } from "react";

import DeliState from "@/components/order/detail/deliState";
import ShopInfo from "@/components/order/detail/shopInfo";
import Receipt from "@/components/order/detail/receipt";

const OrderDetailDynamic = ({param}: DynamicRoute) => {
  const orderId = param;
  
  useEffect(()=>{

  },[])

  return(
    <>
    <div className='w-screen min-h-screen bg-grey7'>
      <DeliState />
      <ShopInfo shopId={shopId} shopName={shopName}/>
      <Receipt />
    </div>
    </>
  )
}

export default OrderDetailDynamic;