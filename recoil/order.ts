import { atom } from 'recoil';
import { Order} from '@/types/types';

export const orderAtom = atom<Order>({
  key: 'orderAtom',
  default: {
    shopId: 1,
    address: {
      zipcode: '31111',
      street: 'test길', 
      detail: 'test동',
    },
    orderItems: [
      {
        createdAt: null,
        updatedAt: null,
        id: null,
        price: 29999,
        quantity: 22,
        menuName: 'test메뉴',
        orderItemOptions: [
          {
            id: null,
            optionName: 'test추가',
            price: 500,
          },
        ],
      },
    ],
    requestMsg: '없음',
    requestDoor: true,
    requestSpoon: false,
    orderType: 'DELIVERAY',
    paymentType: 'CARD',
    totalPrice: 320000,
    deliveryPrice: 1000,
    totalPaymentPrice: 321000,
  }
})