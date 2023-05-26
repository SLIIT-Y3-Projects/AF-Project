import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  
  const { userId } = useParams();

  useEffect(() => {
    // Fetch user profile data from the server and set the state values accordingly
    axios
      .get(`/api/customer/${userId}`)
      .then((res) => {
        const { name, email, nic, address, contact } = res.data;
        setName(name);
        setEmail(email);
        setNic(nic);
        setAddress(address);
        setContact(contact);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the API endpoint for updating the user profile with the modified data
    axios
      .put(`/api/customer/update/${userId}`, {
        name,
        email,
        nic,
        address,
        contact,
      })
      .then((res) => {
        // Handle the response after the profile is successfully updated
        console.log(res);
        // Add any additional logic or notifications as needed
      })
      .catch((err) => {
        // Handle errors if the update fails
        console.log(err);
        // Add any additional error handling or notifications as needed
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="mt-5 text-4xl text-center">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-lg mx-auto mt-5">
          <div className="col-span-2">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="nic">NIC:</label>
            <input
              type="text"
              id="nic"
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="contact">Contact:</label>
            <input
              type="text"
              id="contact"
              className="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md"
          >
            Update Profile
          </button>
        </div>
      </form>
      <div className="flex justify-center mt-5">
        <Link to="/dashboard" className="text-indigo-500">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
