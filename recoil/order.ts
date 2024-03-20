import { atom, selector } from 'recoil';
import { Order } from '@/types/types';

export const orderAtom = atom<Order>({
  key: 'orderAtom',
  default: {
    shopId: 1,
    address: {
      street: '아주 다니기 어려운 길',
      detail: '오른쪽 집',
    },
    orderItems: [
      {
        menuId: 2,
        price: 29999,
        quantity: 2,
        menuName: 'test메뉴1',
        orderItemOptions: [
          {
            optionName: 'test추가1',
            price: 500,
          },
          {
            optionName: 'test추가2',
            price: 500,
          },
        ],
      },
      {
        menuId: 3,
        price: 10101,
        quantity: 38,
        menuName: 'test메뉴2',
        orderItemOptions: [
          {
            optionName: 'test추가3',
            price: 2500,
          },
        ],
      },
    ],
    requestMsg: '없음',
    requestDoor: true,
    requestSpoon: false,
    orderType: 'DELIVERY',
    paymentType: 'CARD',
    totalPrice: 0,
    deliveryPrice: 1000,
    totalPaymentPrice: 321000,
    code: '1171010200',
  },
});

export const orderDetailCursor = atom<string | null>({
  key: 'orderDetailCursor',
  default : null,
})

export const orderItemsWithPriceSelector = selector({
  key: 'orderItemsWithPriceSelector',
  get: (prop) => {
    const itemList = prop.get(orderAtom).orderItems;
    const newItemList = itemList.map((item) => {
      const priceOptions = item.orderItemOptions.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0);
      const priceWithOption = item.price + priceOptions;
      const priceTotal = priceWithOption * item.quantity;
      return { ...item, priceWithOption, priceTotal };
    });
    return newItemList;
  },
});

export const pricesSelector = selector({
  key: 'pricesSelector',
  get: ({ get }) => {
    const foodList = get(orderItemsWithPriceSelector);
    const priceFoodTotal = foodList.reduce((acc, cur) => {
      return acc + cur.priceTotal;
    }, 0);
    const priceDelivery = get(orderAtom).deliveryPrice;
    const priceFoodAndDelivery = priceFoodTotal + priceDelivery;
    return { priceFoodTotal, priceDelivery, priceFoodAndDelivery };
  },
});

