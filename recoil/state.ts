import { atom } from 'recoil';
import type { Coordinate, UserInfo } from '@/lib/types';

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

//현재주소
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
export const userInfoAtom = atom<UserInfo>({
  key: 'user',
  default: {
    id: 'unknown',
    nickname: 'unknown',
    email: 'unknown',
    accessToken: null,
  },
});

//액세스 토큰
export const tokenAtom = atom({
  key: 'token',
  default: null,
})
