import React from 'react';

const Chart = ({ data }) => {
  const maxValue = Math.max(...Object.values(data));
  
  return (
    <div className="space-y-3 sm:space-y-4">
      {Object.entries(data).map(([department, rating]) => (
        <div key={department} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="w-full sm:w-32 text-xs sm:text-sm text-gray-700 font-medium">
            {department}
          </div>
          <div className="flex-1 bg-gray-200 rounded-full h-5 sm:h-6 relative">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-5 sm:h-6 rounded-full flex items-center justify-end pr-2"
              style={{ width: `${(rating / maxValue) * 100}%` }}
            >
              <span className="text-white text-xs font-medium">{rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chart;