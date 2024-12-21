import React, { useState } from "react";
import axios from "axios";
import "./AccessDocuments.css"; // Styling file

const AccessDocuments = () => {
  const [uniqueId, setUniqueId] = useState("");
  const [password, setPassword] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");

  const handleAccess = async () => {
    try {
      const API_BASE_URL =
        process.env.REACT_APP_API_URL || "http://localhost:8000";
      const { data } = await axios.post(
        `${API_BASE_URL}/api/pdf/access`,
        { uniqueId, password },
        { responseType: "blob" }
      );

      const pdfBlob = new Blob([data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(pdfBlob);
      setPdfUrl(pdfUrl);
    } catch (error) {
      console.error("Access failed:", error.response?.data || error.message);
      alert("Failed to access document. Please check your credentials.");
    }
  };

  return (
    <div className="lawyer-view">
      <h2>Access Document</h2>
      <input
        placeholder="Unique ID"
        value={uniqueId}
        onChange={(e) => setUniqueId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAccess}>Access Document</button>
      {pdfUrl && (
        <iframe src={pdfUrl} width="600" height="400" title="PDF Viewer" />
      )}
    </div>
  );
};

export default AccessDocuments;
