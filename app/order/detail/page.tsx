'use client';
import PrevPageX from '@/components/common/PrevPageX';
import { getOrderDetail } from '@/services/orderAPI';
import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { userInfoAtom } from '@/recoil/state';

const OrderDetail = () => {
  //const orderStateMap = ['주문확인','조리중','배달중','배달완료'];
  //const order = '' // api 결과로 가져온 데이터
  const user = useRecoilValue(userInfoAtom);
  //const token = user.accessToken;
  //const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtaW50b2xiQG5hdmVyLmNvbSIsInByb3ZpZGVyVHlwZSI6Ik5BVkVSIiwidXNlclR5cGUiOiJNZW1iZXIiLCJleHAiOjE3MDIzNjY5MjZ9.vgShPvQHmksxsdu-asCCCO8rEARbb6HBwg0rSoIpBPE'

  const queryString = useSearchParams();
  const id = queryString.get('id');

  if (!id) {
    const router = useRouter();
    //router.push(`/error?code=002`);
  }

  useEffect(() => {
    console.log(`orderId: ${id}`);
    if(id){
      getOrderDetail(id);
    }
  },[]);

  return (
    <div className='w-screen min-h-screen bg-grey7'>
      <div className='p-4 mb-2 bg-white'>
        <PrevPageX size="1.7em"/>
        <div className="pt-2 text-grey4 font-semibold text-2xl">배달완료</div>
      </div>
      <div className='px-4 py-6 bg-white min-h-10 border-b border-grey2'>
        <div className='pb-3 font-semibold text-[1.3rem]'>울엄마김치찜</div>
        <div className='flex'>
          <div className='flex-1 p-2 mr-1 leading-7 text-center rounded-xl border border-pink1 text-pink1'>재주문</div>
          <div className='flex-1 p-2 ml-1 leading-7 text-center rounded-xl border border-black'>리뷰쓰기</div>
        </div>
      </div>
      <div className='px-4 bg-white min-h-10'>
        <div className='py-4 border-b border-grey8 text-sm text-grey4'>
          <div className='flex'>
            <div className='w-[8rem]'>주문번호</div>
            <div className='flex-1 text-right'>아무튼 번호</div>
          </div>
          <div className='flex mt-2'>
            <div className='w-[8rem]'>주문시간</div>
            <div className='flex-1 text-right'>아무튼 시간</div>
          </div>
        </div>
        <div className='py-4 border-b border-grey8'>
          <div className='pb-2 text-xl font-semibold'>주문내역</div>
          <div className='flex'>
            <div className='flex-1'>목살반삼겹반김치찜 x 1</div>
            <div className='w-[8rem] text-right'>18,900원</div>
          </div>
          <div className='text-sm text-grey4'>
            <div className='flex'>
              <div className='flex-1'>사이즈 선택: 소</div>
              <div className='w-[8rem] text-right'>0원</div>
            </div>
            <div className='flex'>
              <div className='flex-1'>맛선택: 매운맛</div>
              <div className='w-[8rem] text-right'>0원</div>
            </div>
          </div>
        </div>
        <div className='py-4 border-b border-grey8'>
          <div className='flex'>
            <div className='w-[8rem] font-semibold'>총 상품금액</div>
            <div className='flex-1 font-semibold text-right'>0원</div>
          </div>
        </div>
        <div className='py-4 border-b border-grey8'>
          <div className='flex'>
            <div className='w-[8rem]'>배달요금</div>
            <div className='flex-1 text-right'>0원</div>
          </div>
        </div>
        <div className='py-4 border-b border-grey8'>
          <div className='flex'>
            <div className='w-[8rem]'>요기패스 할인</div>
            <div className='flex-1 text-right text-pink1'>-0원</div>
          </div>
        </div>
        <div className='py-4 border-b border-grey8'>
          <div className='flex pb-2 text-xl font-semibold'>
            <div className='w-[8rem]'>결제금액</div>
            <div className='flex-1 text-right'>19,000원</div>
          </div>
          <div className='flex'>
            <div className='w-[8rem]'>결제방식</div>
            <div className='flex-1 text-right'>요기서결제/신용카드</div>
          </div>
        </div>
        <div className='py-4'>
          <div className='flex pb-2 text-xl font-semibold'>주문자정보</div>
          <div className='flex min-h-[3rem]'>
            <div className='w-[8rem]'>연락처</div>
            <div className='flex-1 text-right text-sm text-grey4'>
              <p>010-0000-0000</p>
              <p>안심번호 이용중</p>
            </div>
          </div>
          <div className='flex min-h-[3em]'>
            <div className='w-[8rem]'>주소</div>
            <div className='flex-1 text-right text-sm text-grey4'>
              <p>주소 1</p>
              <p>주소 2</p>
            </div>
          </div>
          <div className='flex min-h-[3rem]'>
            <div className='w-[8rem]'>요청사항</div>
            <div className='flex-1 text-right text-sm text-grey4'>수저, 포크 O</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
