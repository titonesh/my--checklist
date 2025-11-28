import React from "react";

const UserDashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <p>Welcome, regular user! You are logged in successfully.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
