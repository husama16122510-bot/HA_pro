import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import BackToTop from '../ui/BackToTop';
import PageLoader from '../ui/PageLoader';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader />
      <Navbar />
      <main className="flex-grow pt-[88px]">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
