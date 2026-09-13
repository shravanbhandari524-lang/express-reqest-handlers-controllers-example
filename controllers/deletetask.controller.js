import taskModel from "../model/task.model.js";
export const deletetask = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await taskModel.findOneAndDelete({ taskid: id });
    if (!data) {
      const err = new Error("Task not found with that id");
      err.statusCode = 404;
      return next(err);
    }

    return res.json({ success: true, data: data, msg: "deleted" });
  } catch (err) {
    next(err);
  }
};
