'use client';
//import { useEffect } from 'react';

const Loading = () => {
  /*
  const code = new URL(window.location.href).searchParams.get('code');
  const scope = new URL(window.location.href).searchParams.get('scope');
  const authuser = new URL(window.location.href).searchParams.get('authuser');
  const prompt = new URL(window.location.href).searchParams.get('prompt');
  */

  const queryParams = new URLSearchParams(window.location.search);
  const code = queryParams.get('code');
  const scope = queryParams.get('scope');
  const authuser = queryParams.get('authuser');
  const prompt = queryParams.get('prompt');

  console.log(`CODE: ${code}`)
  console.log(`SCOPE: ${scope}`)
  console.log(`AUTHUSER: ${authuser}`)
  console.log(`PROMPT: ${prompt}`)

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>loading...</div>
    </div>
  );
};

export default Loading;
