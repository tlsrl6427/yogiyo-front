'use client'
import Head from 'next/head';
import './globals.css';
import Header from '@/components/header/Header';
import GridIconMenu from '@/components/home/GridIconMenu';
import MyOrderedEateries from '@/components/home/MyOrderedEateries';
import NewEateries from '@/components/home/NewEateries';
import SearchBarLink from '@/components/home/SearchBarLink';
import Footer from '@/components/common/Footer';
import { userAtom } from '@/recoil/state';
import { useRecoilValue } from 'recoil';
import { useEffect } from 'react';

export default function Home() {
  const user = useRecoilValue(userAtom);
  useEffect(()=>{
    console.log(user)
  },[user])
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
