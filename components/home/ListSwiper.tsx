'use client';
import { IoIosArrowForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MarketInfoCard from '../common/MaketInfoCard';
import Link from 'next/link';

//사용할 타입
import type { MaketInfoType } from '@/lib/types';

//넘겨받는 props의 type지정
interface ListSwiperProps {
  dataList?: MaketInfoType[];
}

const slideStyle = {
  flex: '1 1 0',
};

const lastArrowStyle = {
  width: '35px',
  height: '35px',
  border: '1px solid #ccc',
  borderRadius: '50%',
  padding: '5px',
  color: 'red'
}

const ListSwiper = ({ dataList }: ListSwiperProps) => {
  //임시 더미데이터
  const dummy = new Array(10).fill('');

  return (
    <>
      <Swiper spaceBetween={10} slidesPerView={'auto'}>
        {dummy?.map((_, i) => {
          return (
            <SwiperSlide style={slideStyle} key={i}>
              <MarketInfoCard info={{}} />
            </SwiperSlide>
          );
        })}
        {dummy.length > 20 && <SwiperSlide style={slideStyle}>
            <Link href={''} className='w-[90px] h-[170px] flex justify-center items-center flex-col gap-2 cursor-pointer'>
              <IoIosArrowForward style={lastArrowStyle} />
              <span>더보기</span>
            </Link>
          </SwiperSlide>}
      </Swiper>
    </>
  );
};

export default ListSwiper;
