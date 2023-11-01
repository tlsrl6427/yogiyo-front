'use client';
import React, { useState, useEffect } from 'react';
import '/lib/animations.css';

const TabMenu = () => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [selectedTab, setSelectedTab] = useState('deliveryAndTogo');

  useEffect(() => {
    console.log(selectedTab);
  }, [selectedTab]);

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (initialLoad) setInitialLoad(false);
    setSelectedTab(e.target.value);
  };

  const tabAnimation = initialLoad
    ? 'ml-0'
    : selectedTab === 'deliveryAndTogo'
    ? 'underline-animation-to-left'
    : 'underline-animation-to-right';

  return (
    <div className="bg-yogrey">
      <div className="flex bg-white pl-4 pr-4">
        <div className="w-[50%]">
          <input
            type="radio"
            id="deliveryAndTogo"
            value="deliveryAndTogo"
            style={{ display: 'none' }}
            checked={selectedTab === 'deliveryAndTogo'}
            onChange={handleTabChange}
          />
          <label htmlFor="deliveryAndTogo">
            <p
              className={`text-center p-3 ${selectedTab === 'deliveryAndTogo' ? 'font-bold' : ''}`}
            >
              배달/포장
            </p>
          </label>
        </div>
        <div className="w-[50%]">
          <input
            type="radio"
            id="yomart"
            value="yomart"
            style={{ display: 'none' }}
            checked={selectedTab === 'yomart'}
            onChange={handleTabChange}
          />
          <label htmlFor="yomart">
            <p className={`text-center p-3 ${selectedTab === 'yomart' ? 'font-bold' : ''}`}>
              요마트
            </p>
          </label>
        </div>
      </div>
      <div className="pl-4 pr-4 border-b-2 border-slate-200">
        <div className={`${tabAnimation} bg-black h-[3px] w-1/2`}></div>
      </div>
    </div>
  );
};

export default TabMenu;
