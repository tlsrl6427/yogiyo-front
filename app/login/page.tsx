'use client'
import React, { useState } from "react";
import "lib/styles.css";
import { GoX } from "react-icons/go";
import EmailJoin from "@/components/login/emailJoin";
import EmailLogin from "@/components/login/emailLogin";

const Login = () => {
  const [view, setView] = useState(2);

  const yogiyoLogo = {
    backgroundImage: `url(/img/yogiyo_new_logo.svg)`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    view === 0 ? (
      <div className="w-full h-screen p-2 flex flex-col">
        <GoX className="text-[2rem]" />
        <div className="w-full h-[50px] mt-10" style={yogiyoLogo} />
        <p className="pt-3 text-center">로그인하고 다양한 혜택을 받아보세요!</p>
        <div className="w-full p-4 mt-10 rounded-xl bg-kakao">
          <p className="font-semibold text-center">카카오로 로그인</p>
        </div>
        <div className="w-full p-4 mt-3 rounded-xl bg-naver">
          <p className="font-semibold text-white text-center">네이버로 로그인</p>
        </div>
        <div className="w-full p-4 mt-3 rounded-xl bg-slate-200">
          <p className="font-semibold text-center">이메일로 로그인</p>
        </div>
        <div className="w-full p-4 rounded-xl border border-slate-300 mt-auto">
          <p className="font-semibold text-center">이메일로 회원가입</p>
        </div>
      </div>
    ) : (
      view === 1 ? <EmailJoin />: <EmailLogin />
    )
  );
};

export default Login;
