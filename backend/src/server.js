import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import authRoute from "./routes/userRoute.js";
const { MONGO_URI, PORT } = process.env;

connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: false, // Add this line
})
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/api/users", authRoute);
