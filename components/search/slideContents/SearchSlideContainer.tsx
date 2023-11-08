'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import './slideStyles.css';

import { useSearchParams } from 'next/navigation';
import MarketDetailList from '@/components/common/MarketDetailList';
import SearchOptionList from './SearchOptionList';
import KakaoMap from '@/components/common/KakaoMap';

const SearchSlideContainer = () => {
  const searchParams = useSearchParams();

  //검색 키워드
  const queryKeyword = searchParams.get('searchKeyword');

  //메뉴바 이름
  const menuBar = ['가게', '메뉴', '포장'];

  //페이지네이션 옵션
  const pagination = {
    clickable: true,
    // 차후 가게/메뉴/포장 숫자도 렌더링 추가해야함
    renderBullet: (index: number, className: string) => {
      return '<span class="' + className + '">' + menuBar[index] + '</span>';
    },
  };

  return (
    <div className="search_swiper pt-[10px]">
      <Swiper pagination={pagination} scrollbar={{}} modules={[Scrollbar, Pagination]}>
        <SwiperSlide>
          <div className="h-[30px] sticky top-0" />
          <SearchOptionList />
          <MarketDetailList />
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30px] sticky top-0" />
          <SearchOptionList />
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[30px] sticky top-0" />
          <SearchOptionList />
          <KakaoMap />
          <MarketDetailList />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SearchSlideContainer;
