import mongoose from "mongoose";
const { Schema, model } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    requiered: true,
    trim: true,
  },
  url: {
    type: String,
    requiered: true,
    trim: true,
  },
  languages: [
    {
      type: Schema.Types.ObjectId,
      ref: "Language",
      requiered: true,
    },
  ],

  repositorio: {
    type: String,
    requiered: true,
    trim: true,
  },
});

export const Project = model("Project", projectSchema);
