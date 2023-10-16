import React from "react";
import Header from "@/components/common/Header";

interface Props {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      {/* @ts-ignore */}
      <Header />
      <>{children}</>
    </div>
  );
}

export default HomeLayout;