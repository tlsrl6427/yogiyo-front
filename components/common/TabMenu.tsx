'use client';
import React, { useState, useEffect } from 'react';
import '/lib/animations.css';
import { TabAndToggle } from '@/types/types';

/**
 * 탭 요소 컴포넌트
 * @Props : {data, selected, handleGetSelected}
 * @propsType: TabAndToggle
 * @param data : {left, right} 왼쪽, 오른쪽 메뉴 라벨에 들어갈 텍스트
 * @param selected : 현재 선택된 메뉴
 * @param handleGetSelected : 현재 선택된 메뉴를 변경하는 핸들러 함수
 */

const TabMenu = (props: TabAndToggle) => {
  const [tabIndex, setTabIndex] = useState('default')

  useEffect(() => {
    console.log(`selectedTab: ${props.selected}`);
  }, [props]);

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTab = e.target.value;
    props.handleGetSelected(selectedTab);
    setTabIndex(e.target.value);
  };

  const tabAnimation = () => {
    if(tabIndex==='default'){
      return 'bg-black h-[3px] w-1/2'
    }else if(tabIndex==='left'){
      return 'underline-animation-to-left bg-black h-[3px] w-1/2'
    }else{
      return 'underline-animation-to-right bg-black h-[3px] w-1/2'
    }
  }

  return (
    <div className="bg-grey1">
      <div className="flex bg-white pl-4 pr-4">
        <div className="w-[50%]">
          <input
            type="radio"
            id='tabLeft'
            value="left"
            style={{ display: 'none' }}
            checked={tabIndex === 'left'}
            onChange={handleTabChange}
          />
          <label htmlFor='tabLeft'>
            <p className={`text-center p-3 ${tabIndex === 'left' ? 'font-bold' : ''}`}>
              {props.data.left}
            </p>
          </label>
        </div>
        <div className="w-[50%]">
          <input
            type="radio"
            id="tabRight"
            value="right"
            style={{ display: 'none' }}
            checked={tabIndex === 'right'}
            onChange={handleTabChange}
          />
          <label htmlFor="tabRight">
            <p className={`text-center p-3 ${tabIndex === 'right' ? 'font-bold' : ''}`}>
              {props.data.right}
            </p>
          </label>
        </div>
      </div>
      <div className="pl-4 pr-4 border-b-2 border-slate-200">
        <div className={tabAnimation()}></div>
      </div>
    </div>
  );
};

export default TabMenu;
