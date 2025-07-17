import React, { useContext } from 'react';
import { BookmarkContext } from '../store/BookmarkContext';
import EmployeeCard from '../components/Card/EmployeeCard';

const Bookmarks = ({ onViewEmployee }) => {
  const { bookmarks, removeBookmark } = useContext(BookmarkContext);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Bookmarked Employees</h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">Your saved employees for quick access</p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="text-center py-8 sm:py-12">
          <div className="text-gray-400 text-4xl sm:text-6xl mb-4">📌</div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No bookmarks yet</h3>
          <p className="text-sm sm:text-base text-gray-600">Start bookmarking employees from the dashboard</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {bookmarks.map(employee => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onView={() => onViewEmployee(employee)}
              onPromote={() => {}}
              isBookmarked={true}
              onBookmarkToggle={() => removeBookmark(employee.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmarks;