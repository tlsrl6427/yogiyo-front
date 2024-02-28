export const moneyCalc = (mPrice: number, oPrice: number, quantity: number) => {
  // ( 메뉴가격 + 옵션가격 ) * 수량
  return ( mPrice + oPrice ) * quantity
}