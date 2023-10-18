import React from 'react';

const LoggedOut = () => {
  return (
    <div className="w-full h-full p-5 text-center">
      <p className="leading-10 font-bold text-xl">요기요에 오신 것을 환영합니다.</p>
      <p className="text-sm text-slate-600">로그인 후 매일 새로운 할인을 만나보세요.</p>
      <p className="text-sm text-slate-600">지금 가입하면 특별 추가 혜택까지!</p>
      <ButtonMd></ButtonMd>
    </div>
  );
};

export default LoggedOut;

const ButtonMd = () => {
  return (
    <div>
      <div className="flex justify-center mt-3">
        <button className="w-1/3 p-2 rounded-md bg-pink-500 text-white">로그인/회원가입</button>
      </div>
      <div className="h-[100px] w-screen bg-slate-100"> ... </div>
    </div>
  );
};
