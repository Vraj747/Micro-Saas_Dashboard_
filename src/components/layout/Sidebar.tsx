import { Link } from 'react-router-dom';
import { BarChart3, Users, Settings } from 'lucide-react';

export const Sidebar = () => (
  <aside className="w-64 bg-white dark:bg-gray-800 h-screen border-r">
    <div className="p-6 border-b">
      <h1 className="text-xl font-bold">Micro SaaS</h1>
    </div>
    
    <nav className="mt-6 px-4">
      <Link to="/" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <BarChart3 className="w-5 h-5" />
        <span>Dashboard</span>
      </Link>
      <Link to="/analytics" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <Users className="w-5 h-5" />
        <span>Analytics</span>
      </Link>
      <Link to="/settings" className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <Settings className="w-5 h-5" />
        <span>Settings</span>
      </Link>
    </nav>
  </aside>
);