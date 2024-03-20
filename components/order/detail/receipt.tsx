const Receipt = () => {
  return(
    <div className='px-4 bg-white min-h-10'>
        <div className='py-6 border-b border-grey8 text-grey4'>
          <div className='flex'>
            <div className='w-[8rem]'>주문번호</div>
            <div className='flex-1 text-right'>아무튼 번호</div>
          </div>
          <div className='flex mt-2'>
            <div className='w-[8rem]'>주문시간</div>
            <div className='flex-1 text-right'>아무튼 시간</div>
          </div>
        </div>
        <div className='py-6 border-b border-grey8'>
          <div className='pb-4 text-xl font-semibold'>주문내역</div>
          <div className='flex text-lg'>
            <div className='flex-1'>목살반삼겹반김치찜 x 1</div>
            <div className='w-[8rem] text-right'>18,900원</div>
          </div>
          <div className='text-grey4'>
            <div className='flex'>
              <div className='flex-1'>사이즈 선택: 소</div>
              <div className='w-[8rem] text-right'>0원</div>
            </div>
            <div className='flex'>
              <div className='flex-1'>맛선택: 매운맛</div>
              <div className='w-[8rem] text-right'>0원</div>
            </div>
          </div>
        </div>
        <div className='py-6 border-b border-grey8'>
          <div className='flex text-lg'>
            <div className='w-[8rem] font-semibold'>총 상품금액</div>
            <div className='flex-1 font-semibold text-right'>0원</div>
          </div>
        </div>
        <div className='py-6 border-b border-grey8'>
          <div className='flex text-lg'>
            <div className='w-[8rem]'>배달요금</div>
            <div className='flex-1 text-right'>0원</div>
          </div>
        </div>
        <div className='py-6 border-b border-grey8'>
          <div className='flex text-lg'>
            <div className='w-[8rem]'>요기패스 할인</div>
            <div className='flex-1 text-right text-pink1'>-0원</div>
          </div>
        </div>
        <div className='py-6 border-b border-grey8'>
          <div className='flex pb-2 text-xl font-semibold'>
            <div className='w-[8rem]'>결제금액</div>
            <div className='flex-1 text-right'>19,000원</div>
          </div>
          <div className='flex text-lg'>
            <div className='w-[8rem]'>결제방식</div>
            <div className='flex-1 text-right'>요기서결제/신용카드</div>
          </div>
        </div>
        <div className='py-6'>
          <div className='flex pb-2 text-xl font-semibold'>주문자정보</div>
          <div className='flex min-h-[3rem]'>
            <div className='w-[8rem] text-lg'>연락처</div>
            <div className='flex-1 text-right text-grey4'>
              <p>010-0000-0000</p>
              <p>안심번호 이용중</p>
            </div>
          </div>
          <div className='flex min-h-[3em]'>
            <div className='w-[8rem] text-lg'>주소</div>
            <div className='flex-1 text-right text-grey4'>
              <p>주소 1</p>
              <p>주소 2</p>
            </div>
          </div>
          <div className='flex min-h-[3rem]'>
            <div className='w-[8rem] text-lg'>요청사항</div>
            <div className='flex-1 text-right text-grey4'>수저, 포크 O</div>
          </div>
        </div>
      </div>
  )
}

export default Receipt;