import { atom } from 'recoil';
import type { Coordinate, User } from '@/lib/types';

//헤더모달 state
export const headerModalState = atom({
  key: 'headerModalState',
  default: false,
});

// 현재위치
export const currentCoord = atom<Coordinate | null>({
  key: 'currentCoord',
  default: null,
});

//현재위치 주소
export const currentAddress = atom<string | any>({
  key: 'currentAddress',
  default: '',
});

//검색위치
export const searchCoord = atom<Coordinate | null>({
  key: 'searchCoord',
  default: null,
});

//검색주소
export const searchAddress = atom({
  key: 'searchAddress',
  default: '',
});

//상세정보 입력창 state
export const isDetailMapState = atom({
  key: 'isDetailMapState',
  default: false,
});

//주소찾기 창 state
export const isFindMapState = atom({
  key: 'isFindMapState',
  default: false,
});

//로그인한 유저 정보
export const userAtom = atom<User>({
  key: 'userAtom',
  default: {
    nickname: 'unknown',
    email: 'unknown',
    password: 'unknown',
    phone: 'unknown',
    authAt: 'unknown',
    providerType: 'unknown',
  },
});

//현재 유저 주소 정보
export const userAddress = atom({
  key: 'userAddress',
  default: [
    {
      id: 0,
      address: {
        zipcode: '',
        street: '',
        detail: '',
      },
      // 선택된건지 확인용 임시로 넣음
      select: false,
      addressType: '',
      nickname: '',
      longitude: 0,
      latitude: 0,
    },
  ],
});
