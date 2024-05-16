import mongoose, { Schema, models } from "mongoose";

export interface ICallback extends mongoose.Document {
  userId: Schema.Types.ObjectId;
  vendorProfile: Schema.Types.ObjectId;
  query?: string;
  answered: boolean;
  contactNumber: string;
  email?: string;
}

const callbackSchema = new Schema<ICallback>({
  userId: { type: Schema.Types.ObjectId, required: true },
  vendorProfile: { type: Schema.Types.ObjectId, required: true },
  query: { type: String },
  answered: { type: Boolean, default: false },
  contactNumber: { type: String, required: true },
  email: { type: String },
});

const Callback = models.Callback || mongoose.model("Callback", callbackSchema);
