'use client';
import React, {useState, useEffect} from 'react';
import '/lib/styles.css'
import '/lib/animations.css'
import { Tab } from '@/lib/types';

const ToggleMenu = ( tab: Tab ) => {
  //상태 잘 변하는지 테스트용
  useEffect(()=>{
    console.log(tab.name, tab.initialLoad, tabAnimation)
  },[tab])

  const tabAnimation = tab.initialLoad ? 'left-0' : (tab.name === 'writeable' ? 'right-to-left' : 'left-to-right' )

  return (
    <div className='w-full h-12 overflow-hidden relative'>
      <div className='bg-slate-200 w-full h-full rounded-xl border border-slate-300 flex text-center'>
        <input
            type="radio"
            id="writeable"
            value="writeable"
            style={{ display: 'none' }}
            checked={tab.name === 'writeable'}
            onChange={tab.handle}
          />
        <label htmlFor='writeable' className='w-1/2 z-10 h-full relative'>
          <p className='absolute v-center2 w-full'>작성 가능한 리뷰(0)</p>
        </label>
        <input
            type="radio"
            id="written"
            value="written"
            style={{ display: 'none' }}
            checked={tab.name==='written'}
            onChange={tab.handle}
          />
        <label htmlFor='written' className='w-1/2 z-10 h-full relative'>
          <p className='absolute v-center2 w-full'>작성한 리뷰(0)</p>
        </label>
      </div>
      <div className={`absolute bg-white w-1/2 h-full rounded-xl border border-slate-300 top-0
      ${tabAnimation}`}></div>
    </div>
  )
};

export default ToggleMenu;
