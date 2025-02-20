import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/index.js";
import connectToDatabase from "./config/database.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Helper middlewares
app.use(express.json());
app.use(cookieParser());

// CORS managed
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

app.use("/api", router);

// Catch all other Routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Resource not found",
  });
});

async function startServer() {
  try {
    await connectToDatabase();
    app.listen(port, () => {
      console.log(`Server started on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
