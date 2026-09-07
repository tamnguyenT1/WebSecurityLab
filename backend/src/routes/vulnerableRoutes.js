import express from "express";
import db from "../libs/db.js";
import { buyTicketVulnerable } from "../controllers/vulnerableController.js";

const router = express.Router();

// =========== Bypass frontend
// lab01
router.post("/bypass-frontend/lab01/buy-ticket", buyTicketVulnerable);

export default router;
