// Create new layout for user pages
import { Outlet } from 'react-router-dom';
import UserHeader from '../components/UserHeader';

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />
      <main className="container mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
