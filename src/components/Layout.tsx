import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-bone">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[96px] md:pt-[104px]">{children}</main>
      <Footer />
    </div>
  );
}
