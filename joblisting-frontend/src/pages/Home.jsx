import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 text-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-stone-300">Welcome to Easy Apply</h1>
      <p className="text-lg text-grey-100 mb-8 text-stone-50">Get hired or hire talent easily.</p>
      <div className="space-x-4">
        <Link to="/employee/feed" className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-400">
          Find Jobs
        </Link>
        <Link to="/employer/dashboard" className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-400">
          Employer Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;