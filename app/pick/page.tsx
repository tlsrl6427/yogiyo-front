import PickMarketDetailList from "@/components/pick/PickMarketDetailList"
import Footer from "@/components/common/Footer"

const Pick = () => {
  return (
    <div className="flex flex-col w-full bg-slate-200">
      <h2 className="fixed gap-2 top-0 left-0 w-full h-[50px] flex justify-center items-center bg-white z-50 text-[1.25rem] font-bold">찜</h2>
      <div className="h-[50px]" />
      <div className="px-[20px] pt-[30px] pb-[20px] flex gap-3 items-end">
        <span className="text-[1.2rem] font-bold">찜한 맛집</span>
        <span>{0}개</span>
      </div>
      <PickMarketDetailList pick={true} />
      <div className="px-[20px] pt-[30px] pb-[20px] flex gap-3 items-end">
        <span className="text-[1.2rem] font-bold">최근 본 맛집</span>
        <span>{0}개</span>
      </div>
      <PickMarketDetailList />
      <div className="h-[70px]" />
      <Footer />
    </div>
  )
}
export default Pick