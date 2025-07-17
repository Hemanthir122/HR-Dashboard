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

## 🧩 Component Architecture

### Core Components

#### 1. **App.jsx** (Main Application)
- **Purpose**: Root component managing navigation and routing
- **State**: `activeTab`, `selectedEmployee`
- **Connections**: 
  - Wraps entire app with `BookmarkProvider`
  - Renders all page components conditionally
  - Manages navigation between Dashboard, Bookmarks, Analytics
- **Data Flow**: Passes `onViewEmployee` callback to child components

#### 2. **Dashboard.jsx** (Main Dashboard Page)
- **Purpose**: Primary employee listing with search and filters
- **State**: `employees`, `filteredEmployees`, `searchTerm`, `selectedDepartment`, `selectedRating`
- **Data Sources**: 
  - Fetches from `fetchUsers()` (DummyJSON API)
  - Enhances data with `generateMockDepartment()` and random ratings
- **Connections**:
  - Uses `EmployeeCard` for employee display
  - Uses `SearchBar` and `FilterDropdown` for filtering
  - Passes `onViewEmployee` and `handlePromote` to cards
- **Key Functions**:
  - `handlePromote()`: Increases employee rating (max 5 stars)
  - Real-time filtering based on search and filter criteria

#### 3. **EmployeeCard.jsx** (Employee Display Component)
- **Purpose**: Individual employee card with actions
- **Props**: `employee`, `onView`, `onPromote`, `isBookmarked`, `onBookmarkToggle`
- **Connections**:
  - Uses `BookmarkContext` for bookmark management
  - Uses `Button`, `Badge`, `RatingStars` components
  - Calls parent callbacks for view/promote actions
- **Features**:
  - Bookmark toggle functionality
  - Department color coding
  - Star rating display
  - Action buttons (View, Promote)

#### 4. **BookmarkContext.jsx** (State Management)
- **Purpose**: Global bookmark state management
- **State**: `bookmarks` array
- **Functions**:
  - `addBookmark(employee)`: Adds employee to bookmarks
  - `removeBookmark(employeeId)`: Removes employee from bookmarks
  - `isBookmarked(employeeId)`: Checks bookmark status
- **Connected Components**: All components that need bookmark functionality

#### 5. **EmployeeDetails.jsx** (Detailed Employee View)
- **Purpose**: Comprehensive employee information with tabs
- **Props**: `employee`, `onBack`
- **Features**:
  - Tabbed interface (Overview, Projects, Feedback)
  - Contact information display
  - Performance history
  - Mock project and feedback data
- **Connections**: Uses `Tabs` and `RatingStars` components

#### 6. **Analytics.jsx** (Analytics Dashboard)
- **Purpose**: Performance metrics and insights
- **State**: `analyticsData`, `loading`
- **Features**:
  - Department performance statistics
  - Visual charts using `Chart` component
  - Key performance indicators (KPIs)
- **Data**: Simulated analytics data with loading states

#### 7. **Bookmarks.jsx** (Bookmarked Employees)
- **Purpose**: Display saved/bookmarked employees
- **Connections**:
  - Uses `BookmarkContext` to access bookmarked employees
  - Renders `EmployeeCard` components for each bookmark
  - Allows removal of bookmarks

### Utility Components

#### **SearchBar.jsx**
- **Purpose**: Search input with icon
- **Props**: `value`, `onChange`, `placeholder`
- **Used by**: Dashboard for employee filtering

#### **FilterDropdown.jsx**
- **Purpose**: Dropdown filter component
- **Props**: `label`, `value`, `onChange`, `options`
- **Features**: Custom dropdown with search functionality
- **Used by**: Dashboard for department and rating filters

#### **RatingStars.jsx**
- **Purpose**: Star rating display component
- **Props**: `rating`, `maxStars`, `size`
- **Features**: Configurable star display with different sizes
- **Used by**: EmployeeCard, EmployeeDetails, Analytics

#### **Button.jsx**
- **Purpose**: Reusable button component
- **Props**: `variant`, `size`, `onClick`, `disabled`
- **Variants**: primary, outline, secondary, danger
- **Used by**: Multiple components for consistent styling

#### **Badge.jsx**
- **Purpose**: Status/category badges
- **Props**: `text`, `className`
- **Used by**: EmployeeCard for department display

#### **Chart.jsx**
- **Purpose**: Bar chart visualization
- **Props**: `data` (object with department ratings)
- **Used by**: Analytics page for performance visualization

#### **Tabs.jsx**
- **Purpose**: Tab navigation component
- **Props**: `tabs`, `activeTab`, `onTabChange`
- **Used by**: EmployeeDetails for content organization

### Utility Functions

#### **lib/fetchUsers.js**
- **Purpose**: API data fetching
- **Function**: `fetchUsers(limit)` - Fetches user data from DummyJSON
- **Used by**: Dashboard component for employee data

#### **lib/utils.js**
- **Functions**:
  - `generateMockDepartment()`: Random department assignment
  - `generateMockRating()`: Random rating generation
  - `formatDate()`: Date formatting utility
- **Used by**: Dashboard for data enhancement

#### **lib/constants.js**
- **Constants**:
  - `DEPARTMENTS`: Available department list
  - `RATING_COLORS`: Color mapping for ratings
  - `DEPARTMENT_COLORS`: Color mapping for department badges
- **Used by**: Multiple components for consistent styling

## 🔄 Data Flow

### 1. **Employee Data Flow**
```
DummyJSON API → fetchUsers() → Dashboard → EmployeeCard → User Interface
```

### 2. **Bookmark Flow**
```
EmployeeCard → BookmarkContext → Bookmarks Page
```

### 3. **Promotion Flow**
```
EmployeeCard (Promote Button) → Dashboard (handlePromote) → State Update → Re-render
```

### 4. **Navigation Flow**
```
App.jsx → Navigation State → Conditional Page Rendering
```

## 🎨 Styling System

### **Color Scheme**
- **Primary**: Purple to Blue gradient (`from-purple-600 to-blue-600`)
- **Secondary**: Various department-specific colors
- **Background**: Light gray (`bg-gray-50`)
- **Cards**: White with subtle shadows

### **Department Colors**
- Engineering: Blue (`bg-blue-100 text-blue-800`)
- Sales: Green (`bg-green-100 text-green-800`)
- Marketing: Purple (`bg-purple-100 text-purple-800`)
- Support: Yellow (`bg-yellow-100 text-yellow-800`)
- HR: Pink (`bg-pink-100 text-pink-800`)
- Finance: Indigo (`bg-indigo-100 text-indigo-800`)

### **Responsive Design**
- Mobile-first approach
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Flexible spacing and typography

## 🔧 Key Features Implementation

### **Search & Filter System**
- Real-time search across name, email, department
- Multi-criteria filtering (department + rating)
- Case-insensitive search implementation
- Dynamic result count display

### **Promotion System**
- Click "Promote" button increases star rating
- Maximum 5-star rating limit
- Immediate visual feedback
- State persistence during session

### **Bookmark Management**
- Context-based state management
- Persistent bookmark state
- Visual bookmark indicators
- Easy add/remove functionality

### **Performance Optimization**
- Efficient filtering with useEffect
- Memoized calculations where applicable
- Lazy loading for employee details
- Optimized re-renders

## 🚀 Future Enhancements

- [ ] Add authentication system
- [ ] Implement real backend API
- [ ] Add employee creation/editing
- [ ] Include more detailed analytics
- [ ] Add export functionality
- [ ] Implement pagination
- [ ] Add dark mode toggle
- [ ] Include notification system

## 🐛 Known Issues & Limitations

- Uses mock data from DummyJSON API
- No persistent storage (bookmarks reset on refresh)
- Limited to 20 employees for demo purposes
- Analytics data is simulated

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License.