import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

import style from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={style.wrapper}>
      <header>
        <Toaster position="top-center" reverseOrder={false} />
        <AppBar />
      </header>
      <main className={style.main}>
        <div className={style.childContainer}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <footer className={style.footer}>
        <span>2022</span>
        <b>PhoneBook</b>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};
