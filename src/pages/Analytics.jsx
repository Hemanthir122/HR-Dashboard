import React, { useState, useEffect } from "react";
import { BarChart3, TrendingUp, Users, Star } from "lucide-react";
import Chart from "../components/Chart";

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading analytics data
    setTimeout(() => {
      setAnalyticsData({
        departmentRatings: {
          Engineering: 4.2,
          Sales: 3.8,
          Marketing: 4.0,
          Support: 3.5,
          HR: 4.1,
          Finance: 3.9,
        },
        totalEmployees: 20,
        averageRating: 3.9,
        topPerformers: 5,
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Analytics Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Track performance metrics and insights
        </p>
      </div>

      {/* Stats Cards images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">
                Total Employees
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {analyticsData.totalEmployees}
              </p>
            </div>
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Average Rating</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {analyticsData.averageRating}
              </p>
            </div>
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Top Performers</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {analyticsData.topPerformers}
              </p>
            </div>
            <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600">Departments</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900">
                {Object.keys(analyticsData.departmentRatings).length}
              </p>
            </div>
            <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
          Department Performance
        </h2>
        <Chart data={analyticsData.departmentRatings} />
      </div>
    </div>
  );
};

export default Analytics;
