import React, { useEffect, useState } from "react";
import { getAllSentEmails } from "../services/api";
import "./SentEmails.css"; 
const SentEmails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    loadSentEmails();
  }, []);

  const loadSentEmails = async () => {
    try {
      const response = await getAllSentEmails();
      setEmails(response.data);
    } catch (error) {
      console.error("Error fetching sent emails:", error);
    }
  };

  return (
    <div className="sent-emails-container">
      <h2 className="list-title">Sent Emails</h2>
      <ul className="sent-emails-list">
        {emails.map((email, index) => (
          <li key={index} className="sent-email-item">
            <div className="email-info">
              <div className="email-field">
                <span className="field-label">Subject:</span> {email.subject}
              </div>
              <div className="email-field">
                <span className="field-label">Message:</span> {email.message}
              </div>
              <div className="email-field">
                <span className="field-label">Recipient:</span>
                {email.email}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SentEmails;
