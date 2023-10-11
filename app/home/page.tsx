import Header from "@/components/common/Header";
import Banner from "@/components/home/Banner";
import GridIconMenu from "@/components/home/GridIconMenu";
import MyOrderedEateries from "@/components/home/MyOrderedEateries";

const Home = () => {

  return (
    <div className="flex flex-col gap-4 max-w-[400px]">
      <Header />
      <Banner />
      <GridIconMenu />
      <MyOrderedEateries />
    </div>
  );
}

export default Home