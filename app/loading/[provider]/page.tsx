'use client';
import { useEffect, useState } from 'react';
import { postGoogleAuthCode } from '@/services/api';

const Loading = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const code = queryParams.get('code');
    const scope = queryParams.get('scope');
    const authuser = queryParams.get('authuser');
    const prompt = queryParams.get('prompt');
    const authSource = {
      email: null,
      password: null,
      authCode: code,
      providerType: 'GOOGLE',
    };

    postGoogleAuthCode(authSource);
  }, []);

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>loading...</div>
    </div>
  );
};

export default Loading;
