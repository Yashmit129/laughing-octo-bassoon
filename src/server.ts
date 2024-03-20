import express from "express";
import startMongoose from "./mongooseStartup";
import { engine } from "express-handlebars";
import { config } from "dotenv";
import bprsr from "body-parser";
import Model from "./schemas"
import * as path from "path";
config();

startMongoose()
const app = express();
app.use(bprsr.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/quotes", async (req, res) => {
    const quote = new Model(req.body)
    await quote.save();
    res.redirect('/')
});

app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
