import MaketInfoCard from "@/components/common/MaketInfoCard";
const Home = () => {
  const info = {
    name: '롯데리아',
    rate: 4.6,
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex h-3/6 w-screen border-b-2 border-gray-500"></div>
      <MaketInfoCard info={info} />
    </div>
  );
}

export default Home