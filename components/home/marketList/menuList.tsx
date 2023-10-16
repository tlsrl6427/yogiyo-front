'use client'
import { gridIconList } from "@/lib/commonData"
//사용할 모듈
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";

const swiperStyle = {
}

const slideStyle = {
  width: 'auto',
  padding: '10px 20px'
}


const MenuList = () => {

  return (
    <div className="w-full border-b">
      <Swiper 
        style={swiperStyle}
        slidesPerView={'auto'}
        slideToClickedSlide={true}
      >
        {
          gridIconList?.map((menu, i) => {
            return (
              <SwiperSlide style={slideStyle} key={i}>
                <p className="whitespace-nowrap text-slate-500">{menu}</p>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <style jsx global>{`
        .swiper-slide-active {
          border-bottom: 3px solid #333;
        }
        .swiper-slide-active p {
          color: #333;
          font-weight: 800;
        }
    `}</style>
    </div>

  )
}

export default MenuList