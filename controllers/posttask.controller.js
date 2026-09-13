import taskModel from "../model/task.model.js";
export const createTask = async (req, res, next) => {
  try {
    const body = req.body;
    const data = await taskModel.insertOne({
      taskid: body.id,
      task: body.task,
    });
    return res.status(200).json({ success: true, data: data, msg: "inserted" });
  } catch (err) {
    next(err);
  }
};
