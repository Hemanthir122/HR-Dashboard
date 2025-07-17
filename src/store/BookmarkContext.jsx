import React, { createContext, useState, useContext } from 'react';

export const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (employee) => {
    setBookmarks(prev => {
      if (!prev.find(b => b.id === employee.id)) {
        return [...prev, employee];
      }
      return prev;
    });
  };

  const removeBookmark = (employeeId) => {
    setBookmarks(prev => prev.filter(b => b.id !== employeeId));
  };

  const isBookmarked = (employeeId) => {
    return bookmarks.some(b => b.id === employeeId);
  };

  return (
    <BookmarkContext.Provider value={{
      bookmarks,
      addBookmark,
      removeBookmark,
      isBookmarked
    }}>
      {children}
    </BookmarkContext.Provider>
  );
};