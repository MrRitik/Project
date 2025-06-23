import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const MainLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
