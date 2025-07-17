import React, { useState, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import EmployeeCard from "../components/Card/EmployeeCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import { fetchUsers } from "../lib/fetchUsers";

const Dashboard = ({ onViewEmployee }) => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState("All Department");
  const [selectedRating, setSelectedRating] = useState("All Rating");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const userData = await fetchUsers();
        const employeesWithDepartments = userData.map((user) => ({
          ...user,
          department: user.company?.department || "General",
          rating: Math.floor(Math.random() * 5) + 1,
          position: user.company?.title || "Employee",
        }));

        setEmployees(employeesWithDepartments);
        setFilteredEmployees(employeesWithDepartments);
        setLoading(false);
      } catch (error) {
        console.error("Error loading employees:", error);
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  useEffect(() => {
    let filtered = employees;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          employee.department.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by department
    if (selectedDepartment !== "All Department") {
      filtered = filtered.filter(
        (employee) => employee.department === selectedDepartment
      );
    }

    // Filter by rating
    if (selectedRating !== "All Rating") {
      const rating = parseInt(selectedRating);
      filtered = filtered.filter((employee) => employee.rating === rating);
    }

    setFilteredEmployees(filtered);
  }, [searchTerm, selectedDepartment, selectedRating, employees]);

  const handlePromote = (employeeId) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === employeeId
          ? { ...emp, rating: Math.min(emp.rating + 1, 5) }
          : emp
      )
    );
  };

  const departments = [
    "All Department",
    ...new Set(employees.map((emp) => emp.department)),
  ];
  const ratings = ["All Rating", "1", "2", "3", "4", "5"];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Employee Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Manage your team performance and track employee progress
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Type employee name here..."
            />
          </div>
          <div>
            <FilterDropdown
              label="Department"
              value={selectedDepartment}
              onChange={setSelectedDepartment}
              options={departments}
            />
          </div>
          <div>
            <FilterDropdown
              label="Rating"
              value={selectedRating}
              onChange={setSelectedRating}
              options={ratings}
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 bg-purple-600 rounded"></div>
        <span className="text-xs sm:text-sm text-gray-600">
          Showing {filteredEmployees.length} of {employees.length} employees
        </span>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onView={() => onViewEmployee(employee)}
            onPromote={() => handlePromote(employee.id)}
          />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No employees found
          </h3>
          <p className="text-gray-600">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
