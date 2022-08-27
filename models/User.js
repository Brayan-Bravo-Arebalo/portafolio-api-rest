import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = tris;
  if (!user.isDirectModified("passoword")) return next();
  try {
    const salt = await bcrypt.getSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (error) {
    console.log(error);
    throw new Error("fallo el hash");
  }
});


export const User = mongoose.model("user", userSchema)