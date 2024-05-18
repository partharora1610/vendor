import mongoose, { Schema, models } from "mongoose";

export interface ICallback extends mongoose.Document {
  vendorId: Schema.Types.ObjectId;
  query?: string;
  answered: boolean;
  archived: boolean;
  contactNumber: string;
  email?: string;
}

const callbackSchema = new Schema<ICallback>({
  vendorId: { type: Schema.Types.ObjectId, required: true },
  query: { type: String },
  answered: { type: Boolean, default: false },
  archived: { type: Boolean, default: false },
  contactNumber: { type: String, required: true },
  email: { type: String },
});

const Callback =
  models?.Callback || mongoose.model<ICallback>("Callback", callbackSchema);

export default Callback;
