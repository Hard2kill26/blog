import express from "express";
import IndexRoutes from "./routes/index.routes";
import path from "path";
import { create } from "express-handlebars";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));

const hbs = create({
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//middleares
app.use(morgan("dev")); // Permite ver las respuestas de peticiones en consola
app.use(express.urlencoded({ extended: false })); // Guarda los datos de los form como json

//Routes
app.use(IndexRoutes);

export default app;
