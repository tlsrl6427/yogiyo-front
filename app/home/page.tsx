import Header from '@/components/common/Header';
import GridIconMenu from '@/components/home/GridIconMenu';
import MyOrderedEateries from '@/components/home/MyOrderedEateries';
import NewEateries from '@/components/home/NewEateries';
import SearchBarLink from '@/components/home/SearchBarLink';
import Footer from '@/components/common/Footer';

const Home = () => {
  return (
    <div className="flex flex-col w-full pt-[50px]">
      <SearchBarLink />
      <GridIconMenu />
      <div className="p-1.5 bg-slate-100" />
      <MyOrderedEateries />
      <div className="p-1.5 bg-slate-100" />
      <NewEateries />
    </div>
  );
};

export default Home;
