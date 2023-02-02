import React, { useState } from "react";
import "./Settings.css";

function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [saveReminders, setSaveReminders] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleEmailNotifications = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleSaveReminders = () => {
    setSaveReminders(!saveReminders);
  };

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <div className="settings-group">
        <h3>Notifications</h3>
        <div className="settings-item">
          <p>Email Notifications</p>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={handleEmailNotifications}
          />
        </div>
        <div className="settings-item">
          <p>Save Reminders</p>
          <input
            type="checkbox"
            checked={saveReminders}
            onChange={handleSaveReminders}
          />
        </div>
      </div>
      <div className="settings-group">
        <h3>Appearance </h3>
        <div className="settings-item">
          <p>Dark Mode</p>
          <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Settings;
