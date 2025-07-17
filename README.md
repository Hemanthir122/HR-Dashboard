# HR Dashboard - Employee Management System

A modern, responsive HR Dashboard built with React and Tailwind CSS for managing employee performance, bookmarks, and analytics.

## 🚀 Features

- **Employee Dashboard**: View all employees with search and filter capabilities
- **Performance Management**: Rate employees with star ratings and promote functionality
- **Bookmark System**: Save favorite employees for quick access
- **Employee Details**: Detailed view with tabbed interface (Overview, Projects, Feedback)
- **Analytics Dashboard**: Performance metrics and department-wise insights
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Card/
│   │   └── EmployeeCard.jsx    # Employee card component
│   ├── Badge.jsx              # Department/status badges
│   ├── Button.jsx             # Reusable button component
│   ├── Chart.jsx              # Analytics chart component
│   ├── FilterDropdown.jsx     # Filter dropdown component
│   ├── RatingStars.jsx        # Star rating display
│   ├── SearchBar.jsx          # Search input component
│   └── Tabs.jsx               # Tab navigation component
├── lib/                  # Utility functions and data fetching
│   ├── constants.js           # App constants (departments, colors)
│   ├── fetchUsers.js          # API data fetching utilities
│   └── utils.js               # Helper functions
├── pages/                # Main application pages
│   ├── Analytics.jsx          # Analytics dashboard page
│   ├── Bookmarks.jsx          # Bookmarked employees page
│   ├── Dashboard.jsx          # Main dashboard page
│   └── EmployeeDetails.jsx    # Employee detail view page
├── store/                # State management
│   └── BookmarkContext.jsx    # Bookmark state management
├── App.jsx               # Main application component
├── main.jsx              # Application entry point
└── index.css             # Global styles (Tailwind CSS)
```

## 🔧 Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Context API** - State management
- **Vite** - Build tool and dev server
- **DummyJSON API** - Mock user data

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hr-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📄 License

This project is licensed under the MIT License.
