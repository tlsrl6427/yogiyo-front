import LatestKeyword from '@/components/search/LatestKeyword';
import SearchHeader from '@/components/search/SearchHeader';

const Search = () => {
  return (
    <div className="">
      <SearchHeader />
      <div className='h-[50px]' />
      <LatestKeyword />
    </div>
  );
};

export default Search;
