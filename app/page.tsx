import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/common/Footer';
import HomePage from './home/page';
import Head from 'next/head';

const RootPage  = () => {
  return (
    <div>
      <Head>
        <title>yogiyo</title>
        <meta name="description" content="clone yogiyo"></meta>
      </Head>
      <main className="flex flex-col w-full pt-[50px] pb-[70px]">
        <Header />
        <HomePage />
        <Footer />
      </main>
    </div>
  );
}

export default RootPage ;