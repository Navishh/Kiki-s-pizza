import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (pass) => pass.length >= 5,
        message: 'Password must be at least 5 characters long'
      }
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
