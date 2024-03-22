'use client';
import { useEffect, useState } from 'react';
import { DynamicRoute } from '@/types/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { getCookie } from '@/services/loginAPI';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';

interface Props {
  provider: string
}

const Loading = ({ provider }: Props) => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const router = useRouter();

  const queryString = useSearchParams();
  const code = queryString.get('code');
  //const state = queryString.get('state');

  useEffect(() => {
    const reqAuth = {
      email: null,
      password: null,
      authCode: code as string,
      providerType: provider.toUpperCase(),
    };
    const asyncfunction = async () => {
      try{
        const resLogin = await getCookie(reqAuth);
        if(resLogin){
          setUserInfo({...userInfo, userId: resLogin.userId});
          router.push('/home');
        }else{
          throw new Error('200');
        }
      }catch{

      };
    }
    const res = asyncfunction();
  },[])

  return (
    <div className="w-screen h-screen bg-pink1">
      <div>{`${provider} auth loading...`}</div>
    </div>
  );
};

export default Loading;
