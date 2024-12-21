import React, { useState } from "react";
import axios from "axios";
import {
  Card,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
} from "@mui/material";

const QueryPage = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Fetch results from API
  const handleFetchResults = async () => {
    if (!query.trim()) {
      setError("Please enter a valid query.");
      setResponse("");
      return;
    }

    setLoading(true);
    setError("");
    setResponse("");

    try {
      // Construct the full legal query
      const fullQuery = `Explain the legal implications of ${query} under Indian Law, including sections from the IPC and other relevant laws.`;

      // Make a request to Vidhi Shiksha AI API for Indian law research
      const geminiResponse = await axios.post(
        // "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDFGqX_0CdXn9p0-KzL87YbP6NW8GpUh8U",
        {
          contents: [
            {
              parts: [
                {
                  text: fullQuery, // Use the full legal query
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Vidhi Shiksha AI API Full Response:", geminiResponse);

      if (geminiResponse?.data) {
        console.log("Vidhi Shiksha AI Data:", geminiResponse.data);

        const candidates = geminiResponse.data?.candidates;
        console.log("Candidates:", candidates);

        if (candidates && candidates.length > 0) {
          const parts = candidates[0]?.content?.parts;

          if (parts && parts.length > 0) {
            const textContent = parts.map((part) => part.text).join(" ");

            setResponse(textContent || "No response generated.");
          } else {
            setResponse("No legal information found.");
          }
        } else {
          setResponse("No response generated.");
        }
      } else {
        setResponse("Failed to retrieve response from Vidhi Shiksha AI.");
      }
    } catch (err) {
      setError("An error occurred while fetching results. Please try again.");
      console.error("Error fetching data:", err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen py-12">
      <Container maxWidth="md">
        <Card
          sx={{
            padding: "2rem",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
            borderRadius: "12px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "#2e7d32", fontWeight: "bold" }}
          >
            Vidhi Shiksha AI Legal Query System
          </Typography>

          <TextField
            fullWidth
            label="Enter your legal query"
            value={query}
            onChange={handleInputChange}
            variant="outlined"
            margin="normal"
            InputProps={{
              style: { color: "#000000" },
            }}
            InputLabelProps={{
              style: { color: "#2e7d32" },
            }}
          />

          <Button
            variant="contained"
            fullWidth
            onClick={handleFetchResults}
            disabled={loading}
            sx={{
              marginTop: "1rem",
              backgroundColor: "#4caf50",
              color: "#ffffff",
              padding: "0.75rem",
              fontSize: "1rem",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#388e3c",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "#ffffff" }} />
            ) : (
              "Search"
            )}
          </Button>

          {error && (
            <Typography
              color="error"
              align="center"
              sx={{ marginTop: "1rem", fontSize: "0.9rem" }}
            >
              {error}
            </Typography>
          )}
        </Card>

        {response && (
          <Card
            sx={{
              marginTop: "2rem",
              padding: "1.5rem",
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
              borderRadius: "12px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#2e7d32",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Response from Vidhi Shiksha AI:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#4a4a4a", whiteSpace: "pre-wrap" }}
            >
              {response}
            </Typography>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default QueryPage;
