import { DynamicRoute, Order } from "@/types/types"
import { useEffect, useState } from "react";

import DeliState from "@/components/order/detail/deliState";
import ShopInfo from "@/components/order/detail/shopInfo";
import Receipt from "@/components/order/detail/receipt";
import { getOrderDetail } from "@/services/orderAPI";

const OrderDetailDynamic = ({param}: DynamicRoute) => {
  const orderId = param;
  const [orderInfo, setOrderInfo] = useState<Order | null>(null);
  
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
        <DeliState />
        <ShopInfo orderInfo={orderInfo}/>
        <Receipt />
      </div>
      :<></>}
    </div>
  )
}

export default OrderDetailDynamic;