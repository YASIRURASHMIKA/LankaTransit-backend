import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("LankaTransit Backend is running!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});