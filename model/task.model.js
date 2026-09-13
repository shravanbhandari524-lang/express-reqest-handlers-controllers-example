import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
  taskid: {
    type: Number,
    required: true,
    unique: true,
  },

  task: {
    type: String,
    required: true,
  },
});
const taskModel = mongoose.model("tasks", taskSchema);

export default taskModel;
