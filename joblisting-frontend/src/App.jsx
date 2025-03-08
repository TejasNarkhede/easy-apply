import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Feed from "./pages/Feed";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/feed" element={<Feed />} />
        <Route path="/employer/dashboard" element={<Dashboard />} />
        <Route path="/employer/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
