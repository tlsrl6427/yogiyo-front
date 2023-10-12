import Header from "@/components/common/Header";
import GridIconMenu from "@/components/home/GridIconMenu";
import MyOrderedEateries from "@/components/home/MyOrderedEateries";
import NewEateries from "@/components/home/NewEateries";
import SearchBarLink from "@/components/home/SearchBarLink";

const Home = () => {

  return (
    <div className="flex flex-col max-w-[400px] pt-[50px]">
      <Header />
      {/* <Banner /> */}
      <SearchBarLink />
      <GridIconMenu />
      <div className="p-1.5 bg-slate-100" />
      <MyOrderedEateries />
      <div className="p-1.5 bg-slate-100" />
      <NewEateries />
    </div>
  );
}

export default Home