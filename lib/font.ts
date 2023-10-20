import { Nanum_Gothic } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';

export const nanum_Gothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin']
});

export const noto_sans = Noto_Sans({
  weight: ['500', '600', '700', '800', '900'],
  subsets: ['latin']
});