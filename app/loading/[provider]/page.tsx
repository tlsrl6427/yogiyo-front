'use client';
import { useEffect, useState } from 'react';
import { DynamicRoute } from '@/lib/types';

const Loading = ({params}: DynamicRoute) => {
  const [user, setUser] = useState({});

  console.log(params.provider);

  return (
    <div className="w-screen h-screen bg-yopink">
      <div>{`${params.provider} auth loading...`}</div>
    </div>
  );
};

export default Loading;
