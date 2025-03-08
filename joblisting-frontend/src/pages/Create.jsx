import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [form, setForm] = useState({
    profile: "",
    exp: "",
    techs: "",
    desc: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // string
      const formattedSkills = form.techs.split(",").map((skill) => skill.trim());
      await axios.post("http://localhost:8080/post", {
        ...form,
        techs: formattedSkills,
      });
      navigate("/employer/dashboard");
    } catch (error) {
      console.error("Error creating job post", error);
    }
  };

  return (
    <div className="p-6 bg-slate-950 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-stone-300">Create Job Post</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-6 rounded-lg shadow w-full max-w-md"
      >
        <input
          type="text"
          name="profile"
          placeholder="Job Profile"
          value={form.profile}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-stone-300"
          required
        />
        <input
          type="number"
          name="exp"
          placeholder="Experience (Years)"
          value={form.exp}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-stone-300"
          required
        />
        <input
          type="text"
          name="techs"
          placeholder="Required Skills (comma-separated)"
          value={form.techs}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-stone-300"
          required
        />
        <textarea
          name="desc"
          placeholder="Job Description"
          value={form.desc}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded text-stone-300"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-blue-950 text-white px-6 py-2 rounded w-full hover:bg-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
