// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import * as pdfjs from "pdfjs-dist";

// // Set PDF.js worker source to a CDN to avoid "fake worker" warning
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js";

// const DocumentAnalyzer = () => {
//   const [file, setFile] = useState(null);
//   const [extractedText, setExtractedText] = useState("");
//   const [analysisResult, setAnalysisResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//     extractTextFromPdf(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   const extractTextFromPdf = async (file) => {
//     const pdf = await pdfjs.getDocument(URL.createObjectURL(file)).promise;
//     let extractedText = "";
//     for (let i = 0; i < pdf.numPages; i++) {
//       const page = await pdf.getPage(i + 1);
//       const textContent = await page.getTextContent();
//       extractedText += textContent.items.map((item) => item.str).join(" ");
//     }
//     setExtractedText(extractedText);
//   };

//   const analyzeDocument = async () => {
//     setLoading(true);
//     try {
//       // Replace with your actual Gemini API URL
//       const response = await fetch(
//         "https://your-gemini-api-endpoint.com/analyze",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U`, // Replace with your valid Gemini API key
//           },
//           body: JSON.stringify({ documentText: extractedText }),
//         }
//       );

//       const data = await response.json();
//       setAnalysisResult(data.result || "No analysis result available.");
//     } catch (error) {
//       console.error("Error analyzing document with Gemini:", error);
//       setAnalysisResult(
//         "Failed to analyze the document using Gemini. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Document Analyzer
//       </h1>

//       {/* File Upload Section */}
//       <div
//         {...getRootProps()}
//         className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg mb-4 cursor-pointer hover:bg-gray-100"
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-600">
//           Drag & drop a document here, or click to select one
//         </p>
//       </div>

//       {/* Show Uploaded File Name */}
//       {file && (
//         <p className="text-gray-800 font-medium mb-4">
//           Uploaded File: <span className="text-blue-600">{file.name}</span>
//         </p>
//       )}

//       {/* Analyze Button */}
//       {extractedText && (
//         <button
//           onClick={analyzeDocument}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
//         >
//           Analyze Document
//         </button>
//       )}

//       {/* Loading Indicator */}
//       {loading && (
//         <p className="text-gray-600 font-medium">Analyzing document...</p>
//       )}

//       {/* Analysis Results */}
//       {analysisResult && (
//         <div className="bg-gray-100 p-4 mt-4 rounded-lg">
//           <h2 className="text-xl font-bold text-gray-800 mb-2">
//             Analysis Result:
//           </h2>
//           <p className="text-gray-700">{analysisResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentAnalyzer;

// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import * as pdfjs from "pdfjs-dist";

// // Set PDF.js worker source to a CDN to avoid "fake worker" warning
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js";

// const DocumentAnalyzer = () => {
//   const [file, setFile] = useState(null);
//   const [extractedText, setExtractedText] = useState("");
//   const [analysisResult, setAnalysisResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onDrop = (acceptedFiles) => {
//     setFile(acceptedFiles[0]);
//     extractTextFromPdf(acceptedFiles[0]);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   const extractTextFromPdf = async (file) => {
//     const pdf = await pdfjs.getDocument(URL.createObjectURL(file)).promise;
//     let extractedText = "";
//     for (let i = 0; i < pdf.numPages; i++) {
//       const page = await pdf.getPage(i + 1);
//       const textContent = await page.getTextContent();
//       extractedText += textContent.items.map((item) => item.str).join(" ");
//     }
//     setExtractedText(extractedText);
//   };

//   const analyzeDocument = async () => {
//     if (!extractedText) {
//       setAnalysisResult("No text found in the document to analyze.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("https://gemini-api-endpoint.com/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U`, // Replace with your Gemini API key
//         },
//         body: JSON.stringify({ documentText: extractedText }),
//       });

//       if (!response.ok) {
//         throw new Error(
//           `Failed to analyze document. Server responded with ${response.status}: ${response.statusText}`
//         );
//       }

//       const data = await response.json();
//       setAnalysisResult(data.summary || "No summary available.");
//     } catch (error) {
//       console.error("Error analyzing document with Gemini:", error);
//       setAnalysisResult(
//         "Failed to analyze the document using Gemini. Please check the API endpoint and your key."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Document Analyzer
//       </h1>

//       {/* File Upload Section */}
//       <div
//         {...getRootProps()}
//         className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg mb-4 cursor-pointer hover:bg-gray-100"
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-600">
//           Drag & drop a document here, or click to select one
//         </p>
//       </div>

//       {/* Show Uploaded File Name */}
//       {file && (
//         <p className="text-gray-800 font-medium mb-4">
//           Uploaded File: <span className="text-blue-600">{file.name}</span>
//         </p>
//       )}

//       {/* Analyze Button */}
//       {extractedText && (
//         <button
//           onClick={analyzeDocument}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
//         >
//           Analyze Document
//         </button>
//       )}

//       {/* Loading Indicator */}
//       {loading && (
//         <p className="text-gray-600 font-medium">Analyzing document...</p>
//       )}

//       {/* Analysis Results */}
//       {analysisResult && (
//         <div className="bg-gray-100 p-4 mt-4 rounded-lg">
//           <h2 className="text-xl font-bold text-gray-800 mb-2">
//             Analysis Result:
//           </h2>
//           <p className="text-gray-700">{analysisResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentAnalyzer;

// import React, { useState, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import * as pdfjs from "pdfjs-dist";

// // Set PDF.js worker source to a CDN to avoid "fake worker" warning
// pdfjs.GlobalWorkerOptions.workerSrc =
//   "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js";

// const DocumentAnalyzer = () => {
//   const [file, setFile] = useState(null);
//   const [extractedText, setExtractedText] = useState("");
//   const [analysisResult, setAnalysisResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onDrop = (acceptedFiles) => {
//     const selectedFile = acceptedFiles[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       extractTextFromPdf(selectedFile);
//     }
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   const extractTextFromPdf = async (file) => {
//     try {
//       const fileUrl = URL.createObjectURL(file);
//       const pdf = await pdfjs.getDocument(fileUrl).promise;
//       let extractedText = "";

//       for (let i = 0; i < pdf.numPages; i++) {
//         const page = await pdf.getPage(i + 1);
//         const textContent = await page.getTextContent();
//         extractedText += textContent.items.map((item) => item.str).join(" ");
//       }

//       setExtractedText(extractedText);
//       URL.revokeObjectURL(fileUrl); // Clean up the file URL
//     } catch (error) {
//       console.error("Error extracting text from PDF:", error);
//       setExtractedText("Failed to extract text from the document.");
//     }
//   };

//   const analyzeDocument = async () => {
//     if (!extractedText) {
//       setAnalysisResult("No text found in the document to analyze.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch(
//         "https://your-gemini-api-endpoint.com/analyze",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: "Bearer AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U", // Replace with your Gemini API key
//           },
//           body: JSON.stringify({ documentText: extractedText }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(
//           `Failed to analyze document. Server responded with ${response.status}: ${response.statusText}`
//         );
//       }

//       const data = await response.json();
//       setAnalysisResult(data.summary || "No analysis result available.");
//     } catch (error) {
//       console.error("Error analyzing document with Gemini:", error);
//       setAnalysisResult(
//         "Failed to analyze the document using Gemini. Please check the API endpoint and your key."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Reset analysis result when a new file is uploaded
//     setAnalysisResult("");
//   }, [file]);

//   return (
//     <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         Document Analyzer
//       </h1>

//       {/* File Upload Section */}
//       <div
//         {...getRootProps()}
//         className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg mb-4 cursor-pointer hover:bg-gray-100"
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-600">
//           Drag & drop a document here, or click to select one
//         </p>
//       </div>

//       {/* Show Uploaded File Name */}
//       {file && (
//         <p className="text-gray-800 font-medium mb-4">
//           Uploaded File: <span className="text-blue-600">{file.name}</span>
//         </p>
//       )}

//       {/* Analyze Button */}
//       {extractedText && !loading && (
//         <button
//           onClick={analyzeDocument}
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
//         >
//           Analyze Document
//         </button>
//       )}

//       {/* Loading Indicator */}
//       {loading && (
//         <p className="text-gray-600 font-medium">Analyzing document...</p>
//       )}

//       {/* Analysis Results */}
//       {analysisResult && (
//         <div className="bg-gray-100 p-4 mt-4 rounded-lg">
//           <h2 className="text-xl font-bold text-gray-800 mb-2">
//             Analysis Result:
//           </h2>
//           <p className="text-gray-700">{analysisResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentAnalyzer;

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import * as pdfjs from "pdfjs-dist";
import Tesseract from "tesseract.js";
import mammoth from "mammoth";

// Set PDF.js worker source to a CDN to avoid "fake worker" warning
pdfjs.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js";

const DocumentAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    if (selectedFile) {
      setFile(selectedFile);
      extractTextFromFile(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const extractTextFromFile = async (file) => {
    const fileType = file.type;
    const fileReader = new FileReader();

    try {
      if (fileType === "application/pdf") {
        // Extract text from PDF
        await extractTextFromPdf(file);
      } else if (
        fileType ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        // Extract text from DOCX
        await extractTextFromDocx(file);
      } else if (fileType.startsWith("image/")) {
        // Extract text from Image (OCR)
        await extractTextFromImage(file);
      } else {
        setExtractedText("Unsupported file type.");
        return;
      }
    } catch (error) {
      console.error("Error extracting text:", error);
      setExtractedText("Failed to extract text from the document.");
    }
  };

  const extractTextFromPdf = async (file) => {
    const fileUrl = URL.createObjectURL(file);
    const pdf = await pdfjs.getDocument(fileUrl).promise;
    let extractedText = "";

    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const textContent = await page.getTextContent();
      extractedText += textContent.items.map((item) => item.str).join(" ");
    }

    setExtractedText(extractedText);
    URL.revokeObjectURL(fileUrl);
  };

  const extractTextFromDocx = async (file) => {
    const arrayBuffer = await file.arrayBuffer();
    mammoth
      .extractRawText({ arrayBuffer })
      .then((result) => {
        setExtractedText(result.value);
      })
      .catch((error) => {
        console.error("Error extracting text from DOCX:", error);
        setExtractedText("Failed to extract text from DOCX.");
      });
  };

  const extractTextFromImage = async (file) => {
    const imageUrl = URL.createObjectURL(file);
    Tesseract.recognize(imageUrl, "eng", {
      logger: (m) => console.log(m),
    })
      .then(({ data: { text } }) => {
        setExtractedText(text);
      })
      .catch((error) => {
        console.error("Error extracting text from Image:", error);
        setExtractedText("Failed to extract text from image.");
      });
  };

  const analyzeDocument = async () => {
    if (!extractedText) {
      setAnalysisResult("No text found in the document to analyze.");
      return;
    }

    setLoading(true);
    try {
      // Use the API key from environment variables
      const apiEndpoint =
        "https://us-central1-aiplatform.googleapis.com/v1/projects/my-project/locations/us-central1/publishers/google/models/gemini-1.5-pro-001:generateContent";

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U`, // Use your provided API key here
        },
        body: JSON.stringify({
          contents: [
            {
              content: extractedText,
            },
          ],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Failed to analyze document. Server responded with ${response.status}: ${response.statusText}. ${errorData.error.message}`
        );
      }

      const data = await response.json();
      setAnalysisResult(data.summary || "No analysis result available.");
    } catch (error) {
      console.error("Error analyzing document", error);
      setAnalysisResult(
        "Failed to analyze the document. Please check the API endpoint and your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Reset analysis result when a new file is uploaded
    setAnalysisResult("");
  }, [file]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Document Analyzer
      </h1>

      {/* File Upload Section */}
      <div
        {...getRootProps()}
        className="border-dashed border-2 border-gray-300 p-6 text-center rounded-lg mb-4 cursor-pointer hover:bg-gray-100"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag & drop a document here, or click to select one
        </p>
      </div>

      {/* Show Uploaded File Name */}
      {file && (
        <p className="text-gray-800 font-medium mb-4">
          Uploaded File: <span className="text-blue-600">{file.name}</span>
        </p>
      )}

      {/* Analyze Button */}
      {extractedText && !loading && (
        <button
          onClick={analyzeDocument}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors mb-4"
        >
          Analyze Document
        </button>
      )}

      {/* Loading Indicator */}
      {loading && (
        <p className="text-gray-600 font-medium">Analyzing document...</p>
      )}

      {/* Analysis Results */}
      {analysisResult && (
        <div className="bg-gray-100 p-4 mt-4 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Analysis Result:
          </h2>
          <p className="text-gray-700">{analysisResult}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentAnalyzer;
