"use server";

import Profile from "@/database/profile.model";
import { connectToDatabase } from "../db";
import User from "@/database/user.model";
import { date } from "zod";

interface getVendorProfileProps {
  email: string;
}

export const getAllVendors = async () => {
  try {
    connectToDatabase();
    const vendorProfiles = await Profile.find({});

    return vendorProfiles;
  } catch (error) {
    console.log(error);
  }
};

export const getVendorProfile = async (params: getVendorProfileProps) => {
  try {
    connectToDatabase();

    return null;
  } catch (error) {
    console.log(error);
    return error;
  }
};

interface createVendorProfileProps {
  basicInformation: any;
  pastWork: any;
  servicesOffered: any;
}

export const createVendorProfile = async (params: string) => {
  try {
    connectToDatabase();
    let { basicInformation, servicesOffered, pastWork } = JSON.parse(params);

    // Need to chnage this
    basicInformation = {
      companyName: "shadcn",
      phoneNumbers: "1234567890",
      ownerName: "sachin",
      email: "email@gmail.com",
      website: "hello",
      facebook: "https://facebook.com",
      instagram: "https://facebook.com",
      youtube: "https://facebook.com",
      location: {
        address: "address",
        city: "city",
        state: "state",
        zip: "124106",
      },
      clientsServiced: 0,
      serviceLocations: ["Delhi", "Mumbai"],
      allowDirectCall: true,
    };

    const profile = await Profile.create({
      basicInformation,
      pastWork,
      services: servicesOffered,
    });

    return {
      data: JSON.stringify(profile),
    };
  } catch (error) {
    console.log("Error: ", error);
  }
};
