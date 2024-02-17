import { Schema, model, models } from "mongoose";

<<<<<<< HEAD
const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
=======
/*
export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo: String;
    firstName: string;
    lastName: string;
    planId: string;
    creditBalance: number;
    createdAt?: Date;
    updatedAt?: Date;
}
*/
  


const UserSchema = new Schema({
    clerkId: {type: String, required: true ,unique:true},
    email: {type: String, required: true ,unique:true},
    username: {type: String, required: true ,unique:true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: String,defualt:1},
    creditBalance: {type: Number,defualt:10},

>>>>>>> origin/main
});

const User = models?.User || model("User", UserSchema);

export default User;
