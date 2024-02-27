import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // createdBy will take reference from user.models
    createdBy: {
      // follows the below syntax to tell the relation
      // type followed by reference
      // name of ref must be same as mentioned in user.models
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    // subTodos is an array of objects
    // taking ref from subToDos
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubToDo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
