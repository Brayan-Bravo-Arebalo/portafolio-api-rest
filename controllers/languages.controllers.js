import { Language } from "../models/Language.js";

export const getLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    console.log(languages);
    return res.json({ languages });
  } catch (error) {}
};

export const addLanguage = async (req, res) => {
  try {
    let { name, image } = req.body;

    const language = new Language({ name, image });
    const newLanguage = await language.save();
    return res.status(201).json({ newLanguage });
  } catch (error) {
    return res.status(500).json({ error: "error de servidor" });
  }
};
