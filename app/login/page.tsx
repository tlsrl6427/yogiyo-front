import React from "react";
import "lib/styles.css"
import { GoX } from "react-icons/go";

const login = () => {

  const yogiyoLogo = {
    backgroundImage: `url(/img/yogiyo_new_logo.svg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return(
    <div className="w-full h-screen p-2 flex flex-col">
      <GoX className="text-[2.5rem]"/>
      <div className="w-full h-[50px]" style={yogiyoLogo} />
      <p className="pt-3 text-center">로그인하고 다양한 혜택을 받아보세요!</p>
      <div className="w-full h-14 mt-10 rounded-xl bg-kakao relative">
        <p className="transform-center font-semibold">카카오로 로그인</p>
      </div>
      <div className="w-full h-14 mt-3 rounded-xl bg-naver relative">
        <p className="transform-center font-semibold text-white">네이버로 로그인</p>
      </div>
      <div className="w-full h-14 mt-3 rounded-xl bg-slate-200 relative">
        <p className="transform-center font-semibold">이메일로 로그인</p>
      </div>
      <div className="w-full h-14 rounded-xl border border-slate-300 relative mt-auto">
        <p className="transform-center font-semibold">이메일로 회원가입</p>
      </div>
    </div>
  )
}

export default login;
