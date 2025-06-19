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
    
    // Reset error state
    setError('');

    // Basic validation
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Check credentials
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('user', 'admin');
      localStorage.setItem('isAdmin', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#063970] to-[#4a90e2] p-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 space-y-6">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex justify-center">
            <MdFlightTakeoff className="text-6xl text-[#063970]" />
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[#063970]">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4a90e2] focus:border-[#4a90e2]"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4a90e2] focus:border-[#4a90e2]"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#063970] hover:bg-[#4a90e2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4a90e2] transition-colors duration-200"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Demo Credentials */}
        <div className="text-center text-sm text-gray-600">
          <p className="font-semibold">Demo Credentials</p>
          <p>Username: admin | Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
