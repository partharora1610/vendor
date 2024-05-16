"use server";
import { connectToDatabase } from "../db";
import User from "@/database/user.model";

interface createUserParams {
  name: string;
  email: string;
}

export const createUser = async (params: createUserParams) => {
  console.log("In the createUser function");
  try {
    connectToDatabase();
    const { email, name } = params;

    const user = await User.findOne({ email });

    if (user) {
      return user;
    }

    const newUser = await User.create({ email, name });

    return {
      success: true,
      data: newUser,
    };
  } catch (error) {
    console.log(error);
    return error;
  }
};
