'use client';
//import { useEffect } from 'react';

const Loading = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const state = new URL(window.location.href).searchParams.get('state');

  console.log(code, state);

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>loading...</div>
    </div>
  );
};

export default Loading;
