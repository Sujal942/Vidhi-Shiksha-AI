import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as pdfjs from "pdfjs-dist";
import * as pdfjsWorker from "pdfjs-dist/legacy/build/pdf.worker.entry";
// Set the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const DocumentAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [extractedText, setExtractedText] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle file upload
  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    extractTextFromPdf(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Extract text from PDF
  const extractTextFromPdf = async (file) => {
    const pdf = await pdfjs.getDocument(URL.createObjectURL(file)).promise;
    let extractedText = "";
    for (let i = 0; i < pdf.numPages; i++) {
      const page = await pdf.getPage(i + 1);
      const textContent = await page.getTextContent();
      extractedText += textContent.items.map((item) => item.str).join(" ");
    }
    setExtractedText(extractedText);
  };

  // Analyze text using Gemini API
  const analyzeDocument = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://gemini.api.endpoint.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U`, // Replace with your Gemini API key if required
        },
        body: JSON.stringify({ documentText: extractedText }),
      });

      const data = await response.json();
      setAnalysisResult(data.result || "No analysis result available.");
    } catch (error) {
      console.error("Error analyzing document with Gemini:", error);
      setAnalysisResult(
        "Failed to analyze the document using Gemini. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Document Analyzer Vidhi Shiksha AI
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
      {extractedText && (
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
