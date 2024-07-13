import React, { useState } from "react";
import { sendEmail } from "../services/api";
import "./EmailForm.css"; 
const EmailForm = () => {
  const [emailData, setEmailData] = useState({
    subject: "",
    message: "",
    recipients: "", 
  });

  const [sending, setSending] = useState(false); 
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recipientsArray = emailData.recipients
      .split(",")
      .map((email) => email.trim());

    
    const emailToSend = {
      subject: emailData.subject,
      message: emailData.message,
      recipients: recipientsArray,
    };

    setError(null);
    setSending(true);

    try {
      await sendEmail(emailToSend); 
      setEmailData({
        subject: "",
        message: "",
        recipients: "",
      });

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      setError("Failed to send email. Please try again."); 
    } finally {
      setSending(false); 
    }
  };

  return (
    <div className="email-form-container">
      <h2 className="form-title">Send Email to Vendors</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="subject" className="label">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
            className="input"
            placeholder="Enter subject"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            className="textarea"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="recipients" className="label">
            Recipients:
          </label>
          <input
            type="text"
            id="recipients"
            name="recipients"
            value={emailData.recipients}
            onChange={handleChange}
            className="input"
            placeholder="Enter recipients' emails (comma-separated)"
            required
          />
          <small className="form-text">Separate emails with commas</small>
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="submit-button" disabled={sending}>
          {sending ? "Sending..." : "Send Email"}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
