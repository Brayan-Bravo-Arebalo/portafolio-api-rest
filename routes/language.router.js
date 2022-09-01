import { Router } from "express";
import {
  getLanguages,
  addLanguage,
} from "../controllers/languages.controllers.js";

const router = Router();

router.get("/", getLanguages);
router.post("/", addLanguage);

export default router;
