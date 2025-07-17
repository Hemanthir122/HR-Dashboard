import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Star, Calendar, Award } from 'lucide-react';
import Tabs from '../components/Tabs';
import RatingStars from '../components/RatingStars';

const EmployeeDetails = ({ employee, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'feedback', label: 'Feedback' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{employee.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{employee.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-700">{employee.address.city}, {employee.address.state}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Performance</h3>
                <div className="flex items-center space-x-2 mb-2">
                  <RatingStars rating={employee.rating} />
                  <span className="text-sm text-gray-600">({employee.rating}/5)</span>
                </div>
                <div className="text-sm text-gray-600">
                  Department: {employee.department}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Performance History</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Q4 2023</span>
                  <RatingStars rating={employee.rating} size="sm" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Q3 2023</span>
                  <RatingStars rating={Math.max(employee.rating - 1, 1)} size="sm" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Q2 2023</span>
                  <RatingStars rating={Math.max(employee.rating - 1, 1)} size="sm" />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Project Alpha</h3>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Completed</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Led the development of new feature set</p>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Jan 2024 - Mar 2024</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Project Beta</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">In Progress</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">Working on system optimization</p>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Apr 2024 - Present</span>
              </div>
            </div>
          </div>
        );
      
      case 'feedback':
        return (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-900">Excellent Performance</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                "Shows great initiative and consistently delivers high-quality work. 
                Excellent team collaboration skills."
              </p>
              <div className="text-xs text-gray-500">- Manager Review, Mar 2024</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-gray-900">Peer Feedback</span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                "Great communicator and always willing to help team members. 
                Brings innovative solutions to complex problems."
              </p>
              <div className="text-xs text-gray-500">- Peer Review, Feb 2024</div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </button>

      {/* Employee Header */}
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-semibold text-lg sm:text-xl">
              {employee.firstName[0]}{employee.lastName[0]}
            </span>
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              {employee.firstName} {employee.lastName}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">{employee.position}</p>
            <p className="text-xs sm:text-sm text-gray-500">Age: {employee.age}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-md">
        <Tabs 
          tabs={tabs} 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        <div className="p-4 sm:p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;