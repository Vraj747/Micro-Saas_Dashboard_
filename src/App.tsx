import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav className="bg-blue-500 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </nav>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
