'use client';
import { useEffect, useState } from 'react';
import { DynamicRoute } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { getAccessToken } from '@/services/loginAPI';
import { useRecoilState } from 'recoil';
import { tokenAtom } from '@/recoil/state';

const Loading = ({params}: DynamicRoute) => {
  const [token, setToken] = useRecoilState(tokenAtom);
  //const [user, setUser] = useState({});

  const queryString = useSearchParams();
  const code = queryString.get('code');
  const state = queryString.get('state');
  const providerType = params.provider

  useEffect(() => {
    const reqAuth = {
      email: null,
      password: null,
      authCode: code as string,
      providerType: providerType.toUpperCase()
    }
    const asyncfunction = async () => {
      const headers = await getAccessToken(reqAuth);
      const token = headers.authorization;
      setToken(token);
    }

    const res = asyncfunction();

  },[])

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>{`${params.provider} auth loading...`}</div>
    </div>
  );
};

export default Loading;
