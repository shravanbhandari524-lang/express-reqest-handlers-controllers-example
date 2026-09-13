import express from "express";
import errorHandler from "./middleware/errorhandler.js";
import connectMonoDB from "./config/mongoose.js";
import dotenv from "dotenv";
import { getAll } from "./controllers/gettask.controller.js";
import { getById } from "./controllers/getbyIdtask.controller.js";
import { createTask } from "./controllers/posttask.controller.js";
import { putTask } from "./controllers/putTask.controller.js";
import { deletetask } from "./controllers/deletetask.controller.js";
dotenv.config({ quiet: true });

connectMonoDB();
const app = express();
app.use(express.json());

app.get("/task/getall", getAll);
app.get("/task/", (req, res) => {
  res.send("HIT");
});
app.get("/task/:id", getById);
app.post("/task", createTask);
app.put("/task/:id", putTask);
// app.patch();
app.delete("/task/:id", deletetask);
app.use(errorHandler);
app.listen(8080, () => {
  console.log("task manager server started");
});
