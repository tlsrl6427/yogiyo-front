'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FiSearch } from 'react-icons/fi';
import 'swiper/css';

const dummyMaketList = [
  '버거킹',
  '맘스터치',
  '본죽',
  '밀양돼지국밥',
  '그놈포차',
  '푸라닥',
  '동키치킨',
  '제일스시',
  '네오피자',
  '베스킨라빈스',
];

const dummy = new Array(10).fill('').map((_, i) => (i + 1).toString() + '. ' + dummyMaketList[i]);

const swiperStyle = {
  flex: '1',
  height: '50px',
};

const slideStyle = {
  height: '50px',
  display: 'flex',
  alignItems: 'center',
};

const SearchBarLink = () => {
  return (
    <div className="px-4 py-2 w-full">
      <Link
        href="/search"
        className="flex items-center gap-2 border border-slate-400 rounded-xl w-full h-[50px] px-4 overflow-hidden"
      >
        <Swiper
          style={swiperStyle}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
          }}
          loop={true}
          direction="vertical"
          slidesPerView={1}
        >
          {dummy?.map((_, i) => (
            <SwiperSlide style={slideStyle} key={i}>
              <p className="">{_}</p>
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="w-[1px] h-2/5 bg-slate-300 mr-2" />
        <FiSearch />
      </Link>
    </div>
  );
};

export default SearchBarLink;
