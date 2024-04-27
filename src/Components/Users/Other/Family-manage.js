import React, { useState } from 'react';
import { BiUser, BiCalendar, BiMaleSign, BiFemaleSign, BiDotsVerticalRounded, BiPlus } from 'react-icons/bi';

const FamilyManagement = () => {
    const [familyMembers, setFamilyMembers] = useState([]);
    const handleSave = (event) => {
        event.preventDefault();
        
        const nameElement = document.getElementById('name');
        const relationshipElement = document.getElementById('relationship');
        const dateOfBirthElement = document.getElementById('dateOfBirth');
        const genderElement = document.getElementById('gender');
      
        if (nameElement && relationshipElement && dateOfBirthElement && genderElement) {
          const name = nameElement.value;
          const relationship = relationshipElement.value;
          const dateOfBirth = dateOfBirthElement.value;
          const gender = genderElement.value;
      
          setFamilyMembers([...familyMembers, { name, relationship, dateOfBirth, gender }]);
        } else {
          console.error('One or more input fields are missing');
        }
      };
  return (
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8 bg-gradient-to-r from-[#ECF2FF] to-[#FBFCFF]">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
     
      <div>
        <h1 className="text-2xl font-bold mb-4">Family User Management</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Family Tree</h2>
          <div className="h-[400px] overflow-auto">
            {familyMembers.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <BiUser className="h-6 w-6 text-gray-600" />
                <p>{member.name} ({member.relationship})</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
          <h2 className="text-2xl font-bold mb-4">Manage Family Members</h2>
          <form onSubmit={handleSave} className="bg-white rounded-lg shadow-md p-6 space-y-4">
          <div className="bg-white  rounded-lg p-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm font-medium leading-none">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="relationship" className="text-sm font-medium leading-none">
                Relationship
              </label>
              <select
                id="relationship"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select relationship</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="grandchild">Grandchild</option>
                <option value="grandparent">Grandparent</option>
              </select>
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="text-sm font-medium leading-none">
                Date of Birth
              </label>
              <input
                id="dateOfBirth"
                type="date"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
            <label htmlFor="gender" className="text-sm font-medium leading-none">
                Gender
            </label>
            <select
                id="gender"
                className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
            <div className="flex justify-end space-x-2">
              <button type="reset" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 h-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Cancel
              </button>
              <button type="submit" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-[#f99a1c] hover:border-[#f99a1c] hover:bg-white hover:text-[#f99a1c] text-white border hover:border-[#f99a1c] h-10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <BiPlus className="mr-1" /> Save
              </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FamilyManagement;
