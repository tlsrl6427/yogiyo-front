'use client'
import { noto_sans } from '@/lib/font';

import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';
import { useRouter } from 'next/navigation';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const user = useRecoilValue(userInfoAtom);
  const router = useRouter();

  useEffect(()=>{
    if(!user.isLogin){
      router.push('/login')
    }
  },[])

  return (
    <div>
      {user.isLogin ? 
        <>
          <Header />
          <div>{children}</div>
          <div className="pb-[70px] bg-blue-300"></div>
          <Footer />
        </> :
        <></>
      }
    </div>
  );
}


