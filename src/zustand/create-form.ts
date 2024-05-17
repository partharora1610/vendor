import { create } from "zustand";

interface PastWorkInterface {
  title: string;
  description: string;
  images: string[];
  hostName: string;
  hostNumber: string;
  hostEmail: string;
  eventDate: string;
  guestCount?: number;
}

interface BasicInformationInterface {
  name: string;
  description: string;
  email: string;
  phoneNumber: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  clientServiced?: number;
  serviceLocations?: string[];
  allowDirectCall?: boolean;

  location: {
    address: string;
    city: string;
    state: string;
  };
}

interface ServiceInterface {
  serviceType: string;
  serviceDescription: string;
  serviceImages: string[];
  approxPricing: string;
}

type Store = {
  basicInformation: BasicInformationInterface;
  servicesOffered: ServiceInterface[];
  pastWork: PastWorkInterface[];

  // methods on the store
  updateBasicInformation: (basicInformation: BasicInformationInterface) => void;
  updateServicesOffered: (servicesOffered: ServiceInterface) => void;
  addPastWork: (pastWork: PastWorkInterface) => void;
};

const createFormStore = create<Store>()((set) => ({
  basicInformation: {
    name: "",
    description: "",
    email: "",
    phoneNumber: "",
    website: "",
    instagram: "",
    facebook: "",
    youtube: "",
    clientServiced: 0,
    serviceLocations: [],
    allowDirectCall: false,
    location: {
      address: "",
      city: "",
      state: "",
    },
  },

  servicesOffered: [],

  pastWork: [],

  updateBasicInformation: (basicInformation: Store["basicInformation"]) => {
    set({ basicInformation });
  },

  updateServicesOffered: (servicesOffered: ServiceInterface) => {
    set((state) => ({
      servicesOffered: [...state.servicesOffered, servicesOffered],
    }));
  },

  addPastWork: (pastWork: PastWorkInterface) => {
    set((state) => ({
      pastWork: [...state.pastWork, pastWork],
    }));
  },
}));

export default createFormStore;
