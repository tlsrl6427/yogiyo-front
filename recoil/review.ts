import { atom, selector } from 'recoil';
import { Review, ReviewPage, ReviewRatings} from '@/types/types';

export const ratingAtom = atom<ReviewRatings>({
  key: 'ratingAtom',
  default: {
    overall: 0,
    amount: 0,
    taste: 0,
    delivery: 0,
  }
})
