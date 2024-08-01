import { Schema } from 'mongoose';

export const UserSchema = new Schema({
  id: Schema.ObjectId,
  name: String,
  role: String,
  gender: String,
  description: String,
  birth: Date,
  email: String,
  password: String,
});
