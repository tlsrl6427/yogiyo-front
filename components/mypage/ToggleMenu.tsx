'use client';
import React, {useState, useEffect} from 'react';
import '/lib/styles.css'
import '/lib/animations.css'

const ToggleMenu = () => {
  const [review, setReview] = useState('writeable');
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(()=>{
    console.log(review, initialLoad, tabAnimation)
  },[review])

  const handleTabChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //useEffect[]에서 setInitialLoad(false)하려고 했는데 초기 렌더링이 2번 연속해서 되고 있어서 여기로 옮김
    if(initialLoad) setInitialLoad(false);
    setReview(e.target.value)
  }

  const tabAnimation = initialLoad ? 'left-0' : (review === 'writeable' ? 'right-to-left' : 'left-to-right' )

  return (
    <div className='w-full h-12 overflow-hidden relative'>
      <div className='bg-slate-200 w-full h-full rounded-xl border border-slate-300 flex text-center'>
        <input
            type="radio"
            id="writeable"
            value="writeable"
            style={{ display: 'none' }}
            checked={review === 'writeable'}
            onChange={handleTabChange}
          />
        <label htmlFor='writeable' className='w-1/2 z-10 h-full relative'>
          <p className='absolute v-center2 w-full'>작성 가능한 리뷰(0)</p>
        </label>
        <input
            type="radio"
            id="written"
            value="written"
            style={{ display: 'none' }}
            checked={review==='written'}
            onChange={handleTabChange}
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
