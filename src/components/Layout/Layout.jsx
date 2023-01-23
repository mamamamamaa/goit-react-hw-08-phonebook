import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-slate-50">
      <header>
        <Toaster position="top-center" reverseOrder={false} />
        <AppBar />
      </header>
      <main className="flex-grow shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.75)]">
        <div className="flex justify-center container mx-auto py-10">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className="bg-white flex items-center justify-center h-16 gap-2">
        <span>2022</span>
        <b>PhoneBook</b>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};
