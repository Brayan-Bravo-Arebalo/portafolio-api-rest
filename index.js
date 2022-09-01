import "dotenv/config";
import "./database/connectdb.js";
import express from "express";

import routerLanguages from "./routes/language.router.js";
import routerProject from "./routes/project.router.js";
import routerUser from "./routes/user.router.js";
import routerSession from "./routes/session.router.js";

const app = express();

app.use(express.json());

app.use("/api/v1/language", routerLanguages);
app.use("/api/v1/project", routerProject);
app.use("/api/v1/session", routerSession);
//app.use("/api/v1/user", routerUser);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("servidor funcionando en el puerto " + PORT);
});
