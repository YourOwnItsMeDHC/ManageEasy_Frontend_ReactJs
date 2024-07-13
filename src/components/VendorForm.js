import React, { useState } from "react";
import { createVendor } from "../services/api";
import "./VendorForm.css"; 
const VendorForm = () => {
  const [vendor, setVendor] = useState({
    name: "",
    email: "",
    upi: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVendor((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createVendor(vendor);
      setVendor({
        name: "",
        email: "",
        upi: "",
      });
      alert("Vendor created successfully!");
    } catch (error) {
      console.error("Error creating vendor:", error);
    }
  };

  return (
    <div className="vendor-form-container">
      <h2 className="form-title">Create Vendor</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={vendor.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={vendor.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="upi">UPI:</label>
          <input
            type="text"
            id="upi"
            name="upi"
            value={vendor.upi}
            onChange={handleChange}
            placeholder="Enter UPI"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Create Vendor
        </button>
      </form>
    </div>
  );
};

export default VendorForm;
