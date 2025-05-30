import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdFlightTakeoff } from 'react-icons/md';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('user', 'admin');
      localStorage.setItem('isAdmin', 'true');
      navigate('/');
    } else if (username === 'user' && password === 'user123') {
      localStorage.setItem('user', 'user');
      localStorage.setItem('isAdmin', 'false');
      navigate('/user/userdashboard');
    } else if (username === 'guest' && password === 'guest123') {
      localStorage.setItem('user', 'guest');
      localStorage.setItem('isAdmin', 'false');
      localStorage.setItem('isGuest', 'true');
      navigate('/guest/dashboard');
    } else {
      setError('Access denied. Valid credentials required.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#063970] to-[#4a90e2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-2xl">
        <div className="text-center">
          <MdFlightTakeoff className="mx-auto h-16 w-16 text-[#063970]" />
          <h2 className="mt-4 text-3xl font-extrabold text-[#063970]">
            Flight Control Access
          </h2>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        <div className="text-center text-sm text-gray-600 mb-4">
          <p>Want to try as guest?</p>
          <p className="font-semibold">Username: guest | Password: guest123</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#4a90e2] focus:border-[#4a90e2] focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#4a90e2] focus:border-[#4a90e2] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#063970] hover:bg-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a90e2] transition-colors duration-300"
            >
              Take Off
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
