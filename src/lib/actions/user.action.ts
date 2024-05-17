"use server";
import { connectToDatabase } from "../db";
import User from "@/database/user.model";

interface createUserParams {
  name: string;
  email: string;
  sub: string;
}

export const createUser = async (params: createUserParams) => {
  console.log("In the createUser function");
  try {
    connectToDatabase();
    const { email, name, sub } = params;

    const user = await User.findOne({ email });

    if (user) {
      return user;
    }

    const newUser = await User.create({ email, name, sub });

    return newUser;
  } catch (error) {
    return null;
  }
};

interface findUniqueUserParams {
  sub: string;
}

export const findUniqueUser = async (params: findUniqueUserParams) => {
  try {
    connectToDatabase();
    const { sub } = params;

    const user = await User.findOne({ sub });

    if (!user) {
      return null;
    }

    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};
