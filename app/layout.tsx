import './globals.css';
import type { Metadata } from 'next';
import { Nanum_Gothic } from 'next/font/google';
import { Noto_Sans } from 'next/font/google';
import RecoilRootWrapper from './RecoilRootWrapper';

const nanum_Gothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin']
});
const noto_sans = Noto_Sans({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'yogiyo front test',
  description: 'test app',
  keywords: ['yogiyo', 'clone'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {/* <body className={nanum_Gothic.className}> */}
      <body className={noto_sans.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
