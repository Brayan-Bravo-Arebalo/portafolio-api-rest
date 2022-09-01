import { User } from "../models/User.js";
import { generateRefreshToken, generateToken } from "../utils/tokenManager.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(403).json({ error: "credenciales incorrectas" });
    }
    const verificarPassword = await user.comparePassword(password);
    if (!verificarPassword) {
      return res.status(403).json({ error: "credenciales incorrectas" });
    }

    generateRefreshToken(user.id, res);

    return res.json({ msg: "incio de session exitoso" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error de servidor" });
  }
};


export const logout = (req,res)=>{
  res.clearCookie("refreshToken")
  res.json({msg: "session cerrada"})
}