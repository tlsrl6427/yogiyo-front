import { DynamicRoute, Ordered } from "@/types/types"
import { useEffect, useState } from "react";

import DeliState from "@/components/order/detail/deliState";
import ShopInfo from "@/components/order/detail/shopInfo";
import Receipt from "@/components/order/detail/receipt";
import { getOrderDetail } from "@/services/orderAPI";

const OrderDetailDynamic = ({ params }: DynamicRoute) => {
  const orderId = params.param;
  const [orderInfo, setOrderInfo] = useState<Ordered | null>(null);
  
  useEffect(()=>{
    handleAPI()
  },[])

  const handleAPI = async () => {
    const orderDetail = await getOrderDetail(orderId);
    setOrderInfo(orderDetail.data)
  }

  return(
    <div>
      {orderInfo?
      <div className='w-screen min-h-screen bg-grey7'>
        <DeliState delState={orderInfo.status} orderType={orderInfo.orderType}/>
        <ShopInfo shopName={orderInfo.shopName} shopId={orderInfo.shopId}/>
        <Receipt />
      </div>
      :<></>}
    </div>
  )
}

export default OrderDetailDynamic;