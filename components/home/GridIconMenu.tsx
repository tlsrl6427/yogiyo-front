import Link from 'next/link';
import { gridIconList } from '@/lib/commonData';

const GridIconMenu = () => {
  return (
    <div className="grid grid-cols-5 gap-4 min-h-[400px] p-4">
      {gridIconList.map((menuName, i) => {
        return (
          <Link
            href={'home/marketList'}
            key={i}
            className="w-full h-full flex flex-col justify-center items-center border border-black"
          >
            {/* 아이콘 들어감 */}
            <span className="text-[10px] font-bold tracking-tighter whitespace-nowrap">
              {menuName}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default GridIconMenu;
