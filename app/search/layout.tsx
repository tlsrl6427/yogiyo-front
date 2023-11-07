import React from 'react';
import SearchHeader from '@/components/search/SearchHeader';

interface Props {
  children: React.ReactNode;
}

const SearchLayout = ({ children }: Props) => {
  return (
    <div className="pt-[50px] pb-[70px]">
      {/* @ts-ignore */}
      <SearchHeader />
      <>{children}</>
    </div>
  );
};

export default SearchLayout;
