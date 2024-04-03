'use client';
import React, { useState, useEffect } from 'react';
import '/lib/styles.css';
import '/lib/animations.css';
import { TabAndToggle } from '@/types/types';

/**
 * 토글 요소 컴포넌트
 * @Props : {data, selected, handleGetSelected}
 * @propsType: TabAndToggle
 * @param data : {left, right} 왼쪽, 오른쪽 메뉴 라벨에 들어갈 텍스트
 * @param selected : 현재 선택된 메뉴
 * @param handleGetSelected : 현재 선택된 메뉴를 변경하는 핸들러 함수
 */

const ToggleMenu = (props: TabAndToggle) => {
  const [toggleIndex, setToggleIndex] = useState('default');

  useEffect(() => {
    console.log(`selectedToggle: ${props.selected}`);
  }, [props]);

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTab = e.target.value;
    props.handleGetSelected(selectedTab);
    setToggleIndex(e.target.value);
  };

  const toggleAnimation = () => {
    if(toggleIndex==='default'){
      return 'absolute bg-white w-1/2 h-full rounded-xl border border-slate-300 top-0'
    }else if(toggleIndex==='left'){
      return 'right-to-left absolute bg-white w-1/2 h-full rounded-xl border border-slate-300 top-0'
    }else{
      return 'left-to-right absolute bg-white w-1/2 h-full rounded-xl border border-slate-300 top-0'
    }
  }

  return (
    <div className="bg-white w-full h-12 overflow-hidden relative">
      <div className="bg-slate-200 w-full h-full rounded-xl border border-slate-300 flex text-center">
        <input
          type="radio"
          id="toggleLeft"
          value="left"
          style={{ display: 'none' }}
          checked={props.selected === 'left'}
          onChange={handleTabChange}
        />
        <label htmlFor="toggleLeft" className="w-1/2 z-10 h-full relative">
          <p className="absolute transform-center w-full">{props.data.left}</p>
        </label>
        <input
          type="radio"
          id="toggleRight"
          value="right"
          style={{ display: 'none' }}
          checked={props.selected === 'right'}
          onChange={handleTabChange}
        />
        <label htmlFor="toggleRight" className="w-1/2 z-10 h-full relative">
          <p className="absolute transform-center w-full">{props.data.right}</p>
        </label>
      </div>
      <div className={toggleAnimation()}></div>
    </div>
  );
};

export default ToggleMenu;
