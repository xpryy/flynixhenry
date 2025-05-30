import { MdAirplanemodeInactive } from 'react-icons/md';

const ErrorPage = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <MdAirplanemodeInactive className="text-8xl text-[#063970] mb-4" />
        <h1 className="text-3xl font-bold text-[#063970]">404 - Flight Not Found</h1>
        <p className="text-gray-600 mt-4">Sorry, the requested flight route doesn't exist or has been cancelled.</p>
        <p className="text-gray-600 mt-2">Please check your flight details or return to the main terminal.</p>
        <button 
            onClick={() => window.history.back()} 
            className="mt-6 px-6 py-2 bg-[#4a90e2] text-white rounded-lg hover:bg-[#063970] transition-colors"
        >
            Return to Terminal
        </button>
    </div>
);

export default ErrorPage;
