import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="pt-[50px] pb-[70px]">
      {/* @ts-ignore */}
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default HomeLayout;
