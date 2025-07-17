import React, { useState, useEffect } from "react";
import { Users, Bookmark, BarChart3, Moon, Sun } from "lucide-react";
import Dashboard from "./pages/Dashboard";
import Bookmarks from "./pages/Bookmarks";
import Analytics from "./pages/Analytics";
import EmployeeDetails from "./pages/EmployeeDetails";
import { BookmarkProvider } from "./store/BookmarkContext";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const renderContent = () => {
    if (selectedEmployee) {
      return (
        <EmployeeDetails
          employee={selectedEmployee}
          onBack={() => setSelectedEmployee(null)}
        />
      );
    }

    switch (activeTab) {
      case "dashboard":
        return <Dashboard onViewEmployee={setSelectedEmployee} />;
      case "bookmarks":
        return <Bookmarks onViewEmployee={setSelectedEmployee} />;
      case "analytics":
        return <Analytics />;
      default:
        return <Dashboard onViewEmployee={setSelectedEmployee} />;
    }
  };

  return (
    <BookmarkProvider>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 via-blue-50 to-green-50 dark:from-indigo-100 dark:via-blue-150 dark:to-emerald-600 text-gray-100 dark:text-gray-100 transition-colors duration-500">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-500 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:h-16 space-y-4 sm:space-y-0">
              {/* Logo and Title */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100">
                    HR Dashboard
                  </h1>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                    Employee Management System
                  </p>
                </div>
              </div>

              {/* Navigation + Theme Toggle */}
              <nav className="flex flex-wrap gap-2 sm:space-x-4 lg:space-x-8 w-full sm:w-auto items-center">
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none justify-center sm:justify-start ${
                    activeTab === "dashboard"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Dashboard</span>
                </button>
                <button
                  onClick={() => setActiveTab("bookmarks")}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none justify-center sm:justify-start ${
                    activeTab === "bookmarks"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Bookmarks</span>
                </button>
                <button
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-none justify-center sm:justify-start ${
                    activeTab === "analytics"
                      ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">Analytics</span>
                </button>

                {/* Theme Toggle Button with Moon/Sun aligned right */}
                <button
                  onClick={() => setIsDark((prev) => !prev)}
                  className="flex items-center space-x-1 px-2 sm:px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs sm:text-sm transition-colors duration-300 ml-auto"
                >
                  {isDark ? (
                    <>
                      <Sun className="w-4 h-4" />
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4" />
                      <span>Dark</span>
                    </>
                  )}
                </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          {renderContent()}
        </main>
      </div>
    </BookmarkProvider>
  );
}

export default App;
