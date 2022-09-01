import { Router } from "express";
import { login } from "../controllers/session.controllers.js";

const router = Router();

router.post("/login", login);

export default router;
