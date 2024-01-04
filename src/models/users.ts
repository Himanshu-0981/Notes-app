import mongoose, { Document } from "mongoose";

type User = {
  name: string;
  email: string;
  password: string;
};

const UserModel =
  (mongoose.models.user as mongoose.Model<User>) ||
  mongoose.model<User>(
    "user",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
    })
  );

export default UserModel;
