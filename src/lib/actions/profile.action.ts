"use server";

import Profile from "@/database/profile.model";

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
  servicesOffered: any;
  pastWork: any;
}
/**
 * coming to the function
 * {
  name: 'shadcn',
  description: 'shadcn',
  email: 'email@gmail.com',
  phoneNumber: '1234567890',
  website: 'hello',
  instagram: 'https://facebook.com',
  facebook: 'https://facebook.com'

  // add youtbe ??
} 
// add locations
// add aboutsection


[
  {
    serviceType: '',
    serviceDescription: '',
    serviceImages: [],
    approxPricing: ''
  }
] [
  {
    eventName: '',
    eventDate: '',
    eventLocation: '',
    eventDescription: '',
    guestCount: 0,
    hostName: '',
    hostContact: '',
    images: []
  }
]
 *  
 * 
 */

export const createVendorProfile = async (params: createVendorProfileProps) => {
  try {
    const { basicInformation, servicesOffered, pastWork } = params;
    console.log(basicInformation, servicesOffered, pastWork);

    const newProfile = new Profile({
      basicInformation,
      services: servicesOffered,
      pastWork,
    });

    return newProfile;
  } catch (error) {
    return error;
  }
};
