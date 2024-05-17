"use server";

import Profile from "@/database/profile.model";
import { connectToDatabase } from "../db";
import User from "@/database/user.model";

interface getVendorProfileProps {
  email: string;
}

export const getAllVendors = async () => {
  try {
    const vendorProfiles = await Profile.find({});

    return vendorProfiles;
  } catch (error) {
    console.log(error);
  }
};

export const getVendorProfile = async (params: getVendorProfileProps) => {
  try {
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
    const { basicInformation, servicesOffered, pastWork } = JSON.parse(params);

    const profile = await Profile.create({
      basicInformation: {
        ...basicInformation,
        location: {
          address: basicInformation.address,
          city: basicInformation.city,
          state: basicInformation.state,
          zip: basicInformation.zip,
        },
      },
    });

    console.log(basicInformation, servicesOffered, pastWork);

    return "Profile created successfully!";
  } catch (error) {
    return error;
  }
};
