import express from "express";
import {
  buyTicketLab02Secure,
  buyTicketLab02Vulnerable,
  buyTicketSecure,
  buyTicketVulnerable,
} from "../controllers/bypassFrontendControllers.js";

const router = express.Router();

// lab 01
router.post("/bypass-frontend/labs/lab01/vulnerable", buyTicketVulnerable);
router.post("/bypass-frontend/labs/lab01/secure", buyTicketSecure);

// lab 02
router.post("/bypass-frontend/labs/lab02/vulnerable", buyTicketLab02Vulnerable);
router.post("/bypass-frontend/labs/lab02/secure", buyTicketLab02Secure);

// lab 03
// lab 04

export default router;
