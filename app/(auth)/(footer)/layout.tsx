'use client'
import Footer from '@/components/common/Footer';

const FooterLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <div>{children}</div>
      <div className="pb-[70px]"></div>
      <Footer />
    </>
  );
}

export default FooterLayout;
