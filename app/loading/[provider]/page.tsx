'use client';
import { useEffect, useState } from 'react';
import { DynamicRoute } from '@/lib/types';
import { useSearchParams } from 'next/navigation';
import { getAccessToken } from '@/services/api';

const Loading = ({params}: DynamicRoute) => {
  const [user, setUser] = useState({});

  const queryString = useSearchParams();
  const code = queryString.get('code');
  const state = queryString.get('state');

  useEffect(()=> {
    const reqAuth = {
      email: null,
      password: null,
      authCode: code as string,
      provider: params.provider
    }
    getAccessToken(reqAuth);
  },[])

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>{`${params.provider} auth loading...`}</div>
    </div>
  );
};

export default Loading;
