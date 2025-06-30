import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarUser from './SidebarUser';
import Header from './Header';

const LayoutUser = () => {
  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-lightgray">
      {/* Sidebar - tetap statis tanpa scroll */}
      <div className="w-64 shrink-0">
        <SidebarUser />
      </div>

      {/* Konten utama dengan scroll di area ini saja */}
      <div className="flex flex-col flex-1 h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutUser;
