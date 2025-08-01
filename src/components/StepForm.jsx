import React from 'react';

const StepForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        <div className="flex-1 p-6 flex flex-col">
          <div>
            <div className="w-full bg-gray-300 h-2.5 rounded-full">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '33%' }} />
            </div>
            <p className="text-sm text-gray-700 mt-2">Step 1 of 3 (33%)</p>

            <form className="space-y-4 mt-6">
              <input type="text" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Full Name" />
              <input type="email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Email Address" />
              <input type="text" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Phone Number" />
            </form>
          </div>

          <button className="bg-blue-600 text-white w-full py-3 mt-6 rounded-md hover:bg-blue-700 transition">
            Next
          </button>
        </div>

        <div className="w-full md:w-1/3 bg-white border-l border-gray-200 p-6">
          <ul className="space-y-4 text-sm">
            <li className="text-gray-400 line-through">Create Account</li>
            <li className="text-blue-600 font-semibold">Personal Info</li>
            <li className="text-gray-400">Review</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
