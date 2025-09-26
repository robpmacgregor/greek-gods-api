import mongoose, { Schema, Document } from 'mongoose';

export interface GreekGod extends Document {
  name: string;
  role: string;
  myth: string;
}

const GreekGodSchema = new Schema<GreekGod>({
  name: { type: String, required: true },
  role: { type: String, required: true },
  myth: { type: String, required: true }
});

export const GreekGodModel = mongoose.model<GreekGod>('GreekGod', GreekGodSchema);