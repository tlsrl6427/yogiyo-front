import Link from "next/link";

const gridIconList = [
  '전체',
  '할인가게',
  '치킨',
  '중국집',
  '버거',
  '한식',
  '카페/디저트',
  '분식',
  '피자/양식',
  '일식/돈까스',
  '족발/보쌈',
  '찜/탕',
  '샌드위치',
  '회/초밥',
  '아시안',
  '고기/구이',
  '샐러드',
  '도시락/죽',
  '야식',
  '프랜차이즈',
  '1인분주문',
  '신규맛집',
  '밀키트',
]

const GridIconMenu = () => {
  return (
    <div className="grid grid-cols-5 gap-4 min-h-[400px] p-4">
    {
      gridIconList.map((menuName, i) => {
        return (
          <Link href={''} key={i} className="w-full h-full flex flex-col justify-center items-center border border-black">
            {/* 아이콘 들어감 */}
            <span className="text-[9px] font-bold tracking-tight">{menuName}</span>
          </Link>
        )
      })
    }
    </div>
  )
}

export default GridIconMenu