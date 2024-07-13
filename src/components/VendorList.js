import React, { useEffect, useState } from "react";
import { getAllVendors } from "../services/api";
import "./VendorList.css"; 

const VendorList = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    getAllVendors().then((response) => {
      setVendors(response.data);
    });
  }, []);

  return (
    <div className="vendor-list-container">
      <h2 className="list-title">Vendors List</h2>
      <ul className="vendor-list">
        {vendors.map((vendor) => (
          <li key={vendor.id} className="vendor-item">
            <div>
              <strong>Name:</strong> {vendor.name}
            </div>
            <div>
              <strong>Email:</strong> {vendor.email}
            </div>
            <div>
              <strong>UPI:</strong> {vendor.upi}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorList;
