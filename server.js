const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/components/config/db");
const pdfRoutes = require("./src/components/routes/pdfRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/pdf", pdfRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
