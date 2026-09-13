import taskModel from "../model/task.model.js";
export const putTask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const task = req.query.task;

    const updatedTask = await taskModel.findOneAndUpdate(
      { taskid: id },
      { task: task },
      { returnDocument: "after" },
    );

    if (!updatedTask) {
      const err = new Error("Task not found with that id");
      err.statusCode = 404;
      return next(err);
    }

    return res.json({ success: true, data: updatedTask, msg: "updated" });
  } catch (err) {
    next(err);
  }
};
