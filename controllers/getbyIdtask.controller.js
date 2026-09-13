import taskModel from "../model/task.model.js";
export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await taskModel.findOne({ taskid: id });
    if (!data) {
      const err = new Error("Resource not found");
      err.stausCode = 404;
      next(err);
      return;
    }
    return res
      .status(200)
      .json({ success: true, data: data, msg: "fetched one task" });
  } catch (err) {
    next(err);
  }
};
