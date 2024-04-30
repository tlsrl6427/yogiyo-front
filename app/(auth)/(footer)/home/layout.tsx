import React from 'react';
import Header from '@/components/header/Header';
interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <main className="pt-[50px]">
      {/* @ts-ignore */}
      <Header />
      <>{children}</>
      {/* <Footer /> */}
    </main>
  );
};

export default HomeLayout;