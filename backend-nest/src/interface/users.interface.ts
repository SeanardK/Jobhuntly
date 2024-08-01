import { Document } from 'mongoose';

export interface User extends Document {
  name: string;
  role: string;
  gender: string;
  description: string;
  birth: Date;
  email: string;
  password: string;
}
