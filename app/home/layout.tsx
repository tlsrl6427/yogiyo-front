import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      {/* @ts-ignore */}
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default HomeLayout;
