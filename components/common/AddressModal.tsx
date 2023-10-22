import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { headerModalState, isDetailMapState, isFindMapState } from '@/recoil/state';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineAim } from 'react-icons/ai';
import { MdArrowBackIosNew } from 'react-icons/md';
import SearchAddressList from './SearchAddressList';
import axios from 'axios';
import DetailMap from './DetailMap';
import FindMap from './FindMap';

export const arrowStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  fontSize: '1.7rem',
  margin: '0 10px',
  cursor: 'pointer',
  color: '#333',
};

const AddressModal = () => {
  const [_, setIsModal] = useRecoilState(headerModalState);
  const [isDetailMap, setIsDetailMap] = useRecoilState(isDetailMapState);
  const [isFindMap, setIsFindMap] = useRecoilState(isFindMapState);
  const [height, setHeight] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const searchIconStyle = {
    position: 'absolute',
    top: '12px',
    left: '35px',
    fontSize: '1.1rem',
    color: '#999',
  };

  const KAKAO_API_BASE_URL = 'https://dapi.kakao.com/v2/local/search/address.json';
  const KAKAO_API_KEY = 'deaa5929c02757563300c7fc32c6ed62';

  const searchAddress = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(KAKAO_API_BASE_URL, {
        headers: {
          Authorization: `KakaoAK ${KAKAO_API_KEY}`,
        },
        params: {
          query,
        },
      });
      setResults(response.data.documents);
      console.log(response.data.documents);
    } catch (error) {
      setResults([]);
    }
  };

  // const { kakao } = window;
  // const handleSearch = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   kakao.maps.load(() => {
  //     if (kakao) {
  //       const places = new kakao.maps.services.Places();

  //       const callback = (data: any, status: any) => {
  //         if (status === kakao.maps.services.Status.OK) {
  //           const addresses = data.map((place: any) => place.address_name);
  //           setResults(addresses);
  //         }
  //       };

  //       places.keywordSearch(query, callback);

  //     }
  //   });
  // };

  return (
    <>
      {/* 모달창 제외 백그라운드 */}
      <div
        onClick={() => setIsModal(false)}
        className="w-full h-full fixed bottom-0 left-0 z-90 opacity-40 bg-black"
      />
      {/* 모달 본문 */}
      {!isDetailMap ? (
        !isFindMap ? (
          <>
            <div
              className={`fixed bottom-0 left-0 w-full transition-all duration-300 ease-in-out bg-white z-10 rounded-t-3xl overflow-hidden ${
                height ? 'h-full' : 'h-[50%]'
              }`}
            >
              {/* 모달창 크기 컨트롤 버튼*/}
              <div
                onClick={() => setHeight(!height)}
                className="cursor-pointer h-8 flex justify-center items-center"
              >
                {/* click 영역 */}
                <p className="w-[50px] h-[5px] bg-slate-300 rounded-xl"></p>
              </div>
              <div className="m-[20px] relative h-[50px]">
                {(isFocused || query) && (
                  <MdArrowBackIosNew
                    style={arrowStyle}
                    onClick={() => {
                      setQuery('');
                      setResults([]);
                    }}
                  />
                )}
                <h2 className="font-black text-center text-[1.2rem]">주소 설정</h2>
              </div>
              <form onSubmit={searchAddress} className="flex-1 px-[20px] relative">
                <FiSearch style={searchIconStyle} />
                <input
                  className="rounded-[10px] bg-slate-200 w-[100%] p-[12px] pl-[40px] text-[0.9rem]"
                  type="text"
                  value={query}
                  placeholder="건물명, 도로명 또는 지번으로 검색"
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => {
                    setIsFocused(true), setHeight(true);
                  }}
                  onBlur={() => setIsFocused(false)}
                />
              </form>
              {!query && (
                <>
                  <p
                    onClick={() => setIsFindMap(true)}
                    className="flex w-full justify-center items-center gap-1 pt-[15px] pb-[15px] cursor-pointer"
                  >
                    <AiOutlineAim /> 현재 위치로 주소 찾기
                  </p>
                  <div className="w-full h-[10px] bg-slate-200"></div>
                </>
              )}

              {isFocused || query ? <SearchAddressList query={query} results={results} /> : null}
            </div>
          </>
        ) : (
          <FindMap />
        )
      ) : (
        <DetailMap />
      )}
    </>
  );
};

export default AddressModal;