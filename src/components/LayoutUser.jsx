// src/components/LayoutUser.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { User as UserIcon } from 'lucide-react';

import SidebarUser from './SidebarUser';

const LayoutUser = () => {
  return (
    <div className="flex min-h-screen bg-lightgray">
      <SidebarUser />

      <div className="flex-grow pl-64">
        <header className="py-4 px-8 flex justify-end items-center bg-softwhite shadow-sm">
          <UserIcon className="w-7 h-7 text-maroon cursor-pointer hover:text-maroon-light transition-colors" />
        </header>

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutUser;