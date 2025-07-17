import React, { useContext } from 'react';
import { Eye, TrendingUp, Bookmark, BookmarkCheck } from 'lucide-react';
import Button from '../Button';
import Badge from '../Badge';
import RatingStars from '../RatingStars';
import { BookmarkContext } from '../../store/BookmarkContext';

const EmployeeCard = ({ employee, onView, onPromote, isBookmarked, onBookmarkToggle }) => {
  const { addBookmark, removeBookmark, isBookmarked: checkBookmarked } = useContext(BookmarkContext);
  
  const bookmarked = isBookmarked !== undefined ? isBookmarked : checkBookmarked(employee.id);

  const handleBookmarkToggle = () => {
    if (onBookmarkToggle) {
      onBookmarkToggle();
    } else {
      if (bookmarked) {
        removeBookmark(employee.id);
      } else {
        addBookmark(employee);
      }
    }
  };

  const getDepartmentColor = (department) => {
    const colors = {
      'Engineering': 'bg-blue-100 text-blue-800',
      'Sales': 'bg-green-100 text-green-800',
      'Marketing': 'bg-purple-100 text-purple-800',
      'Support': 'bg-yellow-100 text-yellow-800',
      'HR': 'bg-pink-100 text-pink-800',
      'Finance': 'bg-indigo-100 text-indigo-800',
      'Research and Development': 'bg-gray-100 text-gray-800',
    };
    return colors[department] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start sm:items-center justify-between mb-4 gap-2">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-sm sm:text-base">
              {employee.firstName[0]}{employee.lastName[0]}
            </span>
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 truncate">{employee.position}</p>
          </div>
        </div>
        <button
          onClick={handleBookmarkToggle}
          className={`p-1.5 sm:p-2 rounded-full transition-colors flex-shrink-0 ${
            bookmarked ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {bookmarked ? <BookmarkCheck className="w-4 h-4 sm:w-5 sm:h-5" /> : <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 truncate">
            <span className="font-medium">Email:</span> {employee.email}
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            <span className="font-medium">Age:</span> {employee.age}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <Badge 
            text={employee.department} 
            className={getDepartmentColor(employee.department)}
          />
          <div className="flex items-center space-x-2">
            <RatingStars rating={employee.rating} />
            <span className="text-xs sm:text-sm text-gray-600">({employee.rating}/5)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onView}
            className="flex items-center justify-center space-x-1 w-full sm:w-auto"
          >
            <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>View</span>
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={onPromote}
            className="flex items-center justify-center space-x-1 w-full sm:w-auto"
          >
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Promote</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;