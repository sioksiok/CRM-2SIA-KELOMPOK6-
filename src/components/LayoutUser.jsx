import React from 'react';
import { Outlet } from 'react-router-dom';

import SidebarUser from './SidebarUser';
import Header from './Header'; // ✅ dipanggil di sini

const LayoutUser = () => {
  return (
    <div className="flex min-h-screen bg-lightgray">
      <div className="w-64">
        <SidebarUser />
      </div>

      <div className="flex-grow">
        <Header /> {/* ✅ digunakan di sini */}
        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutUser;
