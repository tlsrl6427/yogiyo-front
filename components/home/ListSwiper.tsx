'use client';
//swiper는 useRef를 사용하나 SSR에서는 에러가 발생하므로 
//use client를 선언해서 해당 component는 CSR환경에서만 실행되도록 변경

//사용할 모듈
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import MarketInfoCard from "../common/MaketInfoCard";

//사용할 타입
import type { MaketInfoType } from "@/types";

//넘겨받는 props의 type지정
interface ListSwiperProps {
  dataList?: MaketInfoType[];
}

const ListSwiper = ({ dataList }: ListSwiperProps) => {

  //임시 더미데이터
  const dummy = new Array(10).fill('')

  return (
    <>
      <Swiper 
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {
          dummy?.map((_, i) => {
            return (
              <SwiperSlide key={i}>
                <MarketInfoCard info={
                  {}
                }
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  )
}

export default ListSwiper