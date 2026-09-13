import taskModel from "../model/task.model.js";
export const getAll = async (req, res, next) => {
  try {
    console.log("Returned all task");
    const data = await taskModel.find();
    if (data.length <= 0) {
      const err = new Error("Empty db");
      err.statusCode = 404;
      next(err);
      return;
    }
    return res.status(200).json({
      success: false,
      data: data,
      msg: "fetced resourecs",
    });
  } catch (err) {
    next(err);
  }
};
