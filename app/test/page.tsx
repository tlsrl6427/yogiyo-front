'use client';
import React from 'react';
import Link from 'next/link';

const Test = () => {
  return (
    <div className="">
      <div className="flex pl-5 pr-5 pt-3 pb-3 border-b">
        <div className="h-auto w-5/6">
          <p className="text-sm text-slate-400">이메일 아이디</p>
          <p className="pt-1 text-slate-700 font-semibold">oolllb@naver.com</p>
        </div>
        <div className="w-1/6 flex relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">로고</div>
        </div>
      </div>

      <div className="flex pl-5 pr-5 pt-3 pb-3 border-b">
        <div className="h-auto w-5/6">
          <p className="text-sm text-slate-400">비밀번호</p>
          <p className="pt-1 text-slate-700 font-semibold">SNS 계정에서 변경하실 수 있습니다.</p>
        </div>
        <div className="w-1/6 flex relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 "></div>
        </div>
      </div>

      <div className="flex pl-5 pr-5 pt-3 pb-3 border-b">
        <div className="h-auto w-5/6">
          <p className="text-sm text-slate-400">휴대 전화 번호 (2023.04.27 인증됨)</p>
          <p className="pt-1 text-slate-700 font-semibold">oolllb@naver.com</p>
        </div>
        <div className="w-1/6 flex relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
            <Link href="../mypage/ChangeNickName">이동</Link>
          </div>
        </div>
      </div>

      <div className="flex pl-5 pr-5 pt-3 pb-3 border-b">
        <div className="h-auto w-5/6">
          <p className="text-sm text-slate-400">닉네임</p>
          <p className="pt-1 text-slate-700 font-semibold">아무튼닉네임</p>
        </div>
        <div className="w-1/6 flex relative">
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 ">
            <button
              onClick={() => {
                console.log(1);
              }}
            >
              변경
            </button>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-end">
        <p>로그아웃 | 회원탈퇴</p>
      </div>
    </div>
  );
};

export default Test;
