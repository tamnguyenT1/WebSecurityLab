import express from "express";
import { buyTicketVulnerable } from "../controllers/bypassFrontendControllers.js";

const router = express.Router();

router.post("/bypass-frontend/labs/lab01/vulnerable", buyTicketVulnerable);

export default router;
