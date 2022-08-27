import mongoose from "mongoose";

try {
  mongoose.connect(process.env.UrlMongo);
  console.log("DB conectada");
} catch (error) {
  console.log("Error al conectar a DB: " + error);
}
