// src/components/Profile.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const { firstName, lastName, email } = location.state || {};

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>
      <p className="mb-4">
        <span className="font-semibold text-gray-700">First Name:</span>{" "}
        {firstName}
      </p>
      <p className="mb-4">
        <span className="font-semibold text-gray-700">Last Name:</span>{" "}
        {lastName}
      </p>
      <p className="mb-4">
        <span className="font-semibold text-gray-700">Email:</span> {email}
      </p>
    </div>
  );
};

export default Profile;
