import mongoose, { Schema, models } from "mongoose";

export interface IProfile extends mongoose.Document {
  basicInformation: {
    companyName: string;
    phoneNumbers: string;
    email: string;
    website: string;
    facebook: string;
    instagram: string;
    youtube: string;
  };

  location: {
    address: string;
    city: string;
    state: string;
  };

  clientsServiced: number;
  serviceLocations: string[];
  allowDirectCall: boolean;

  about: {
    ownerName?: string[];
    companyDescription?: string;
    images?: string[];
  };

  pastWork: [
    {
      eventName: string;
      eventDate: string;
      eventLocation: string;
      eventDescription?: string;
      guestCount?: number;
      hostName?: string;
      hostContact?: string;
      images: string[];
    }
  ];

  services: [
    {
      serviceType: string;
      serviceDescription: string;
      serviceImages: string[];
      approxPricing: string;
    }
  ];
}

const profileSchema = new Schema<IProfile>({
  basicInformation: {
    companyName: { type: String, required: true },
    phoneNumbers: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String, required: true },
    facebook: { type: String },
    instagram: { type: String },
    youtube: { type: String },
  },

  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },

  clientsServiced: { type: Number, default: 0 },
  serviceLocations: { type: [String], required: true },
  allowDirectCall: { type: Boolean, default: false },

  about: {
    ownerName: { type: [String] },
    companyDescription: { type: String },
    images: { type: [String] },
  },

  pastWork: [
    {
      eventName: { type: String, required: true },
      eventDate: { type: String, required: true },
      eventLocation: { type: String, required: true },
      eventDescription: { type: String },
      guestCount: { type: Number },
      hostName: { type: String },
      hostContact: { type: String },
      images: { type: [String], required: true },
    },
  ],

  services: [
    {
      serviceType: { type: String, required: true },
      serviceDescription: { type: String, required: true },
      serviceImages: { type: [String], required: true },
      approxPricing: { type: String, required: true },
    },
  ],
});

const Profile = models.Profile || mongoose.model("Profile", profileSchema);

export default Profile;
