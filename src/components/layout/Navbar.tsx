import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useThemeStore();
  
  return (
    <header className="bg-white dark:bg-gray-800 border-b px-8 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700">
            <Search className="w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="w-5 h-5" />
          </button>
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
