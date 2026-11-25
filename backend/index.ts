import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { Pool } from "pg";

config();
const PORT = process.env.API_PORT;
const app = express();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Bienvenue sur l'API du projet: Musical Playlist Solo 🎵" });
});

app.get("/songs", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.song");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching songs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`API available on http://localhost:${PORT} !`);
});
