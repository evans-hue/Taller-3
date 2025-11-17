import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import routes from "./routes.js";   // <--- IMPORTACIÓN CORRECTA

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// usar rutas
app.use("/api", routes);

// servir imágenes
app.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "uploads"))
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
