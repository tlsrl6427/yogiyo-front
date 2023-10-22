import { atom } from 'recoil';
import type { Coordinate } from '@/lib/types';

export const headerModalState = atom({
  key: 'headerModalState',
  default: false,
});

export const currentCoord = atom<Coordinate | null>({
  key: 'currentCoord',
  default: null,
});

export const currentAddress = atom({
  key: 'currentAddress',
  default: '',
});
