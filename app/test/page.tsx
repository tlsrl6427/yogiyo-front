'use client'
import React from "react";

const Test = () => {

  return(
    <div className="p-4">
      <input className="w-full p-4 mb-6 border border-slate-300" placeholder="닉네임 입력 (10자 이내)"></input>
      <button className="w-full p-4 bg-pink-600 font-bold text-white text-lg">닉네임 변경</button>
    </div>
  )
}

export default Test;