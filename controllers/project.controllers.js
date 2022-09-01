import { Project } from "../models/Project.js";

export const getProject = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.json({ projects });
  } catch (error) {}
};

export const addProject = async (req, res) => {
  try {
    const { name, url, languages, repositorio } = req.body;
    console.log(req.body);
    const project = new Project({ name, url, languages, repositorio });
    const newProject = await project.save();
    return res.status(201).json({ newProject });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error de servidor" });
  }
};

export const findProject = async (req, res) => {
  try {
    const { languages } = req.body;
    const projects = await Project.find({ languages });
    return res.status(201).json({ projects });
  } catch (error) {
    return res.status(500).json({ error: "error de servidor" });
  }
};
