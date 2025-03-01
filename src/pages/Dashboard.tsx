import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  BarChart3, Users, Settings, Sun, Moon, Menu, 
  Bell, Search, CreditCard, Activity, Target,
  Calendar, Filter, Download, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const data = [
  { day: 'Mon', users: 400, revenue: 2400 },
  { day: 'Tue', users: 600, revenue: 3200 },
  { day: 'Wed', users: 800, revenue: 4100 },
  { day: 'Thu', users: 700, revenue: 3700 },
  { day: 'Fri', users: 900, revenue: 4800 },
];

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [timeRange, setTimeRange] = useState('week');

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} flex h-screen w-screen overflow-hidden`}>
      {/* Enhanced Sidebar */}
      <motion.aside 
        initial={{ x: -250 }}
        animate={{ x: sidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
        className={`absolute md:relative w-72 h-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-50`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="font-bold text-white">M</span>
            </div>
            <h1 className="text-xl font-bold">Micro SaaS</h1>
          </div>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>&times;</button>
        </div>

        <div className="p-4">
          <div className={`p-3 rounded-lg mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
            <p className="text-sm mb-1">Your Plan</p>
            <p className="font-semibold">Pro Plan - Monthly</p>
            <div className="mt-2">
              <Link to="/upgrade" className="text-sm text-blue-500 hover:text-blue-400">Upgrade →</Link>
            </div>
          </div>
        </div>

        <nav className="mt-2 px-4 space-y-1">
          <Link to="/" className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </Link>
          <Link to="/users" className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>
          <Link to="/billing" className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <CreditCard className="w-5 h-5" />
            <span>Billing</span>
          </Link>
          <Link to="/settings" className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 h-full overflow-hidden flex flex-col">
        {/* Enhanced Header */}
        <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} border-b px-8 py-4`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button className="md:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-6 h-6" />
              </button>
              <div className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Search className="w-4 h-4" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`bg-transparent border-none focus:outline-none ${darkMode ? 'placeholder-gray-400' : 'placeholder-gray-500'}`}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className={`p-2 rounded-lg relative ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                onClick={() => setNotificationsOpen(!notificationsOpen)}
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                <span>Upgrade</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Active Users</p>
                  <h3 className="text-2xl font-bold mt-1">2,847</h3>
                  <p className="text-sm text-green-500 flex items-center mt-2">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>12.8%</span>
                  </p>
                </div>
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <Users className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </motion.div>
            {/* Add similar cards for Revenue, Growth, and Sessions */}
          </div>

          {/* Time Range Selector */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Analytics Overview</h2>
            <div className="flex items-center space-x-2">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} border-none`}
              >
                <option value="week">Last 7 days</option>
                <option value="month">Last 30 days</option>
                <option value="quarter">Last 90 days</option>
              </select>
              <button className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Graph */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`p-6 rounded-lg shadow mb-8 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
          >
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? '#444' : '#ddd'} />
                <XAxis dataKey="day" stroke={darkMode ? '#ddd' : '#000'} />
                <YAxis stroke={darkMode ? '#ddd' : '#000'} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: darkMode ? '#1f2937' : '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ r: 6, stroke: '#8884d8', strokeWidth: 2, fill: darkMode ? '#1f2937' : '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2, fill: darkMode ? '#1f2937' : '#fff' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;