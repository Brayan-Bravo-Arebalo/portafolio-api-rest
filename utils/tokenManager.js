import Jwt from "jsonwebtoken";

export const generateToken = (idUser) => {
  const expiresIn = 60 * 100;
  try {
    const token = Jwt.sign({ idUser }, process.env.JWT_SECRET, { expiresIn });
    return { token, expiresIn };
  } catch (error) {
    console.log(error);
  }
};

export const generateRefreshToken = (idUser, res) => {
  const expiresIn = 60 * 60 * 60 * 30;
  try {
    const refreshToken = Jwt.sign({ idUser }, process.env.JWT_REFRESH, {
      expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: !(process.env.MODO === "developer"),
      espires: new Date(Date.now() + expiresIn * 1000),
    });
  } catch (error) {
    console.log(error);
  }
};

export const tokenVerificationError = {
  "invalid signature": "La firma del jwt no es valida",
  "jwt expired": "JWT expirado",
  "invalid token": "token no valido",
  "No Bearer": "Utiliza formato Bearer",
  "jwt must be provided": "JWT formato no valido",
};
