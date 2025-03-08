import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allPosts");
        setJobs(response.data);
      } catch (error) {
        console.error("Error fetching job posts", error);
      }
    };
    fetchJobs();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/posts/${search}`);
      setJobs(response.data);
    } catch (error) {
      console.error("Error searching job posts", error);
    }
  };

  return (
    <div className="p-6 bg-slate-950 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-stone-300">Jobs Marketplace</h2>
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded-l-lg text-stone-50"
        />
        <button type="submit" className="bg-blue-950 text-white border px-4 py-2 rounded-r-lg hover:bg-blue-400">Search</button>
      </form>
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

export default Feed;