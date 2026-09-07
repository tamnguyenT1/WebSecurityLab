import express from "express";
import secureRoutes from "./routes/secureRoutes.js";
import vulnerableRoutes from "./routes/vulnerableRoutes.js";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/vulnerable", vulnerableRoutes);
app.use("/api/secure", secureRoutes);

app.listen(PORT, () => {
  console.log(`Server bắt đầu trên cổng ${PORT}`);
});
