'use client';
import { useState, useEffect } from 'react';
import { searchAddress, searchCoord, isDetailMapState, headerModalState } from '@/recoil/state';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { MdArrowBackIosNew } from 'react-icons/md';
import { GrUserManager } from 'react-icons/gr';
import { arrowStyle } from './AddressModal';

export const mapIconStyle = {
  position: 'absolute',
  zIndex: '999',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: '#fff',
  padding: '5px',
  borderRadius: '50%',
  width: '3rem',
  height: '3rem',
  border: '1px solid #333',
};

const DetailMap = () => {
  const coord = useRecoilValue(searchCoord);
  const setHeaderModal = useSetRecoilState(headerModalState);
  const address = useRecoilValue(searchAddress);
  const setIsDetail = useSetRecoilState(isDetailMapState);
  useEffect(() => {
    if (!coord) return;
    const { kakao } = window;
    kakao.maps?.load(() => {
      let container = document.getElementById('map');

      let options = {
        center: new kakao.maps.LatLng(coord.lat, coord.lng),
        level: 3,
      };

      let map = new kakao.maps.StaticMap(container, options);
    });
  }, [coord]);

  return (
    <div
      className={`flex flex-col gap-[10px] fixed bottom-0 left-0 w-full py-[40px] transition-all duration-300 ease-in-out bg-white z-10 rounded-t-3xl overflow-hidden h-full`}
    >
      <div className="relative h-[50px]">
        <MdArrowBackIosNew style={arrowStyle} onClick={() => setIsDetail(false)} />
        <h2 className="font-black text-center text-[1.2rem]">주소 상세 정보 입력</h2>
      </div>
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] relative">
        <div id="map" style={{ width: '100%', height: '100%' }}></div>
        <GrUserManager style={mapIconStyle} />
      </div>
      <div className="flex flex-col gap-[10px] px-[20px]">
        <p className="font-[500] text-[1.2rem]">{address}</p>
        <input
          type="text"
          className="p-[10px] border rounded-xl"
          placeholder="상세주소를 입력하세요 (건물명, 동/호수 등)"
        />

        <span
          className="cursor-pointer bg-yopink text-white font-black text-[1.2rem] rounded-xl p-[10px] text-center"
          onClick={() => {
            setIsDetail(false);
            setHeaderModal(false);
          }}
        >
          요기로 배달
        </span>
      </div>
    </div>
  );
};

export default DetailMap;
