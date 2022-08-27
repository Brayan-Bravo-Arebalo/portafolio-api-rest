import mongoose from "mongoose";

const languageShema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    image: {
      type: String,
      requiered: true,
    },
  },
});


export const Language = mongoose.model("language", languageShema) 
