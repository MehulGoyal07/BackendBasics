// mongoose is imported
import mongoose from "mongoose";

// Schema or structure created using new mongoose.Schema
// It accepts object
// We can also get hold of timestamps - created at and modified at
const userSchema = new mongoose.Schema(
  {
    // Knaive approach
    // username : String,
    // email : String,
    // isActive : Boolean

    // Industry Standard
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      // We can aslo pass an array
      // required: [true, "password is required"],
    },
    // We can also get hold of timestamps
    // We get hold of created at and updated at
    // We have to pass it as secondary object below
  },
  { timestamps: true }
);

// Schema needs to be import with a name and schema
// below method accepts two parameters name and the schema basis
export const User = mongoose.model("User", userSchema);
// the name written in DB will be in lowercase with a 's' such that 'users'
