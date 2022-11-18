import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <div className="shadow-[inset_0px_0px_8px_0px_rgba(0,0,0,0.75)]">
        <div className="flex justify-center container mx-auto h-[90vh] py-10">
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
      <div className="bg-white flex items-center justify-center h-16 gap-2">
        <span>2022</span>
        <b>PhoneBook</b>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};
