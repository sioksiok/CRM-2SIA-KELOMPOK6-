import { Navigate } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const LayoutUser = () => {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Validasi login & role
  if (!user) return <Navigate to="/signin" />;
  if (user.role !== 'User') return <Navigate to="/" />;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar khusus user */}
      <SidebarUser />

      {/* Area Konten */}
      <div className="flex-1 flex flex-col">
        {/* Header Global */}
        <Header email={user.email} />

        {/* Halaman Dinamis */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default LayoutUser;
