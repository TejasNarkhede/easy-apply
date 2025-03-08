import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allPosts");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6 bg-slate-950 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-stone-300">Employer Dashboard</h2>
      <div className="flex justify-center mb-4">
        <Link to="/employer/create" className="bg-blue-950 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-400">
          Create Job Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{job.profile}</h3>
            <p className="text-gray-700">{job.desc}</p>
            <p className="text-sm text-gray-500">Experience: {job.exp} years</p>
            <p className="text-sm text-gray-500">Skills: {job.techs.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
