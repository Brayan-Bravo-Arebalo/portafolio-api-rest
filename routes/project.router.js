import { Router } from "express";

import {
  addProject,
  findProject,
  getProject,
} from "../controllers/project.controllers.js";

const router = Router();

router.get("/", getProject);
router.post("/", addProject);
router.post("/language", findProject);

export default router;
