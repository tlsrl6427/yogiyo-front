'use client';
import { useState, useEffect } from 'react';
import { currentAddress, currentCoord } from '@/recoil/state';
import { useRecoilState } from 'recoil';

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const [curCoord, setCurCoord] = useRecoilState(currentCoord);
  const [curAdd, setCurAdd] = useRecoilState(currentAddress);

  useEffect(() => {
    if (!curCoord) return; // If center is not set, return early

    const { kakao } = window;
    kakao.maps?.load(() => {
      let container = document.getElementById('map');
      let options = {
        center: new kakao.maps.LatLng(curCoord.lat, curCoord.lng),
        level: 3,
      };

      let map = new kakao.maps.Map(container, options);
      map.setZoomable(false);
    });
  }, [curCoord]);

  return (
    <div className="w-full flex flex-col items-center justify-center pt-4">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
      </div>
      <p>
        {curCoord?.lat} / {curCoord?.lng}
      </p>
      <p>{curAdd}</p>
    </div>
  );
};

export default KakaoMap;
