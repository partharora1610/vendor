import mongoose, { Schema, models } from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  vendorProfile: Schema.Types.ObjectId;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  vendorProfile: { type: Schema.Types.ObjectId, ref: "VendorProfile" },
});

const User = models.User || mongoose.model("User", userSchema);

export default User;
