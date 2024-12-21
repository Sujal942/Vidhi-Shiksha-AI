// import React, { useState } from "react";
// import axios from "axios";
// import "./UploadDocument.css"; // Assuming you have a CSS file for styling

// const UploadDocument = () => {
//   const [file, setFile] = useState(null);
//   const [response, setResponse] = useState(null);

//   const handleFileChange = (e) => setFile(e.target.files[0]);

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append("pdf", file);

//     const { data } = await axios.post(
//       // "http://localhost:8000/api/pdf/upload",
//       "/api/pdf/upload",
//       formData
//     );
//     setResponse(data);
//   };

//   return (
//     <div className="judge-view">
//       <h2>Upload Document</h2>
//       <input
//         type="file"
//         accept="application/pdf,image/*,text/plain"
//         onChange={handleFileChange}
//       />
//       <button onClick={handleUpload}>Upload</button>
//       {response && (
//         <div className="response">
//           <p>
//             <strong>Unique ID:</strong> {response.uniqueId}
//           </p>
//           <p>
//             <strong>Password:</strong> {response.password}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UploadDocument;

import React, { useState } from "react";
import axios from "axios";
import "./UploadDocument.css"; // Styling file

const UploadDocument = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const API_BASE_URL =
        process.env.REACT_APP_API_URL || "http://localhost:8000";
      const { data } = await axios.post(
        `${API_BASE_URL}/api/pdf/upload`,
        formData
      );

      setResponse(data);
    } catch (error) {
      console.error("Upload failed:", error.response?.data || error.message);
      alert("Failed to upload. Please try again.");
    }
  };

  return (
    <div className="judge-view">
      <h2>Upload Document</h2>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {response && (
        <div className="response">
          <p>
            <strong>Unique ID:</strong> {response.uniqueId}
          </p>
          <p>
            <strong>Password:</strong> {response.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default UploadDocument;
