import express from "express";
import db from "../libs/db.js";
import { buyTicketSecure } from "../controllers/secureController.js";

const router = express.Router();

// =========== Bypass frontend
// lab01
router.post("/bypass-frontend/lab01/buy-ticket", buyTicketSecure);

export default router;
