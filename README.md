# HR Dashboard

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

## 📈 Core Functionality

✅ **Search and Filter:** Quickly find employees by name, email, or department  
✅ **Promotion:** Promote employees, increasing their star rating  
✅ **Bookmarks:** Save employees for easy access  
✅ **Analytics:** View department performance insights  
✅ **Dark/Light Mode:** User-friendly theming



## 🐛 Known Limitations

- Uses **mock data** (no backend integration)
- **Bookmarks reset** on refresh



## 📸 Screenshots

<img width="1916" height="916" alt="HR Dashboard Light Mode" src="https://github.com/user-attachments/assets/4732ad00-272b-4737-b17f-c883f8c8c3e7" />

&nbsp;

<img width="1888" height="904" alt="Employee Details View" src="https://github.com/user-attachments/assets/be35d3aa-676f-48b1-bbf4-beeaccc8c44b" />

&nbsp;

<img width="1893" height="835" alt="Analytics Dashboard" src="https://github.com/user-attachments/assets/2f63775c-934c-4829-bedc-a3066ff48534" />

&nbsp;

<img width="1912" height="894" alt="Bookmarks View" src="https://github.com/user-attachments/assets/c3911e33-41a1-4b52-8ead-9f78de322797" />

&nbsp;

<img width="1863" height="919" alt="Dark Mode" src="https://github.com/user-attachments/assets/653cf9b1-6d1f-4c39-be46-83e0cd4468ca" />



