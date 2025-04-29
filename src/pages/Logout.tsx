
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      toast.success('Successfully logged out');
      navigate('/');
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Logging Out</h1>
        <p className="text-gray-600 mb-6">Please wait while we log you out...</p>
        <div className="animate-pulse flex justify-center">
          <div className="h-2 w-24 bg-brand-accent rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Logout;
