import { Schema, model, models } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const todoModel = models.todo || model('todo',todoSchema);
export default todoModel;