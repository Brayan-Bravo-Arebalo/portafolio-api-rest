import { User } from "../models/User.js";

export const addUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    return res.status(201).json({ msg: "usuario agregado" });
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ error: "Ya existe un usuario con este email" });
    }
    return res.status(500).json({ error: "Error de servidor" });
  }
};
