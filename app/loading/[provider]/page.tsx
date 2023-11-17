'use client';
import { use, useEffect, useState } from 'react';
import { DynamicRoute } from '@/lib/types';
import { useSearchParams, useRouter } from 'next/navigation';
import { getAccessToken, getUserInfo, login } from '@/services/loginAPI';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';

const Loading = ({params}: DynamicRoute) => {
  const userInfo = useRecoilValue(userInfoAtom);
  const router = useRouter();

  const queryString = useSearchParams();
  const code = queryString.get('code');
  const state = queryString.get('state');
  const providerType = params.provider;

  useEffect(()=>{
    const reqAuth = {
    email: null,
    password: null,
    authCode: code as string,
    providerType: providerType.toUpperCase()
  }
  const asyncfunction = async () => {
    try{
      const resLogin = await login(reqAuth);
      console.log("?")
      if(resLogin){
        console.log("!!userInfo from recoil")
        console.log(userInfo)
        router.push('/');
      }else{
        throw new Error('200');
      }
    }catch(error){
      router.push('/error?code=001');
    }
  }
  const res = asyncfunction();
},[]);

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>{`${params.provider} auth loading...`}</div>
    </div>
  );
};

export default Loading;
