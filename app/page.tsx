import Head from 'next/head';
import './globals.css';
import Header from '@/components/common/Header';
import GridIconMenu from '@/components/home/GridIconMenu';
import MyOrderedEateries from '@/components/home/MyOrderedEateries';
import NewEateries from '@/components/home/NewEateries';
import SearchBarLink from '@/components/home/SearchBarLink';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>yogiyo</title>
        <meta name="description" content="clone yogiyo"></meta>
      </Head>
      <main className="flex flex-col w-full pt-[50px] pb-[70px]">
        <Header />
        <SearchBarLink />
        <GridIconMenu />
        <div className="p-1.5 bg-slate-100" />
        <MyOrderedEateries />
        <div className="p-1.5 bg-slate-100" />
        <NewEateries />
        <Footer />
      </main>
    </div>
  );
}
