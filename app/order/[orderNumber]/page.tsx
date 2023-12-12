import PrevPageX from "@/components/common/PrevPageX";

const OrderNumber = () => {
  const orderStateMap = ['주문확인','조리중','배달중','배달완료'];
  const order = '' // api 결과로 가져온 데이터

  return(
    <>
      <PrevPageX />
      <div className="w-[80px] text-yogrey4 font-semibold">{orderStateMap[order.order_state as number]}</div>
    </>
  )
}

export default OrderNumber;