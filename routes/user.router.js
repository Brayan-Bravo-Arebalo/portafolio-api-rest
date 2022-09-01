import { Router } from "express";
import { addUser } from "../controllers/user.controllers.js";

const router = Router();

router.post("/addUser", addUser);

export default router;
