import express from "express";
import bypassFrontendRoutes from "./routes/bypassFrontendRoutes.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api", bypassFrontendRoutes);

app.listen(PORT, () => {
  console.log(`Server bắt đầu trên cổng ${PORT}`);
});
