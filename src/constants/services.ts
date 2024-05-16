export const CONSTANT_SERVICES = {
  AllInOneServices: {
    "Weddings Organization": [
      { serviceName: "Wedding", description: "about the wedding event" },
      {
        serviceName: "Destination Wedding",
        description: "about the destination wedding event",
      },
    ],
    Birthday: [
      { serviceName: "Birthday", description: "about the birthday event" },
    ],
    "Date Night": [
      { serviceName: "Date Night", description: "about the date night event" },
    ],
    Proposals: [
      { serviceName: "Proposal", description: "about the proposal event" },
    ],
  },
  IndividualServices: {
    "Weddings Organization": {
      Location: [
        {
          serviceName: "Wedding Location",
          description: "description of wedding location service",
        },
      ],
      Catering: [
        {
          serviceName: "Wedding Catering",
          description: "description of wedding catering service",
        },
      ],
      Photography: [
        {
          serviceName: "Wedding Photography",
          description: "description of wedding photography service",
        },
      ],
      Planning: [
        {
          serviceName: "Wedding Planning",
          description: "description of wedding planning service",
        },
      ],
    },
    Birthday: {
      Venue: [
        {
          serviceName: "Birthday Venue",
          description: "description of birthday venue service",
        },
      ],
      Entertainment: [
        {
          serviceName: "Birthday Entertainment",
          description: "description of birthday entertainment service",
        },
      ],
      Cake: [
        {
          serviceName: "Birthday Cake",
          description: "description of birthday cake service",
        },
      ],
    },
    "Date Night": {
      Restaurant: [
        {
          serviceName: "Restaurant Reservation",
          description: "description of restaurant reservation service",
        },
      ],
      Activities: [
        {
          serviceName: "Date Night Activities",
          description: "description of date night activities service",
        },
      ],
      Transportation: [
        {
          serviceName: "Date Night Transportation",
          description: "description of date night transportation service",
        },
      ],
    },
    Proposals: {
      Venue: [
        {
          serviceName: "Proposal Venue",
          description: "description of proposal venue service",
        },
      ],
      Planning: [
        {
          serviceName: "Proposal Planning",
          description: "description of proposal planning service",
        },
      ],
      Photography: [
        {
          serviceName: "Proposal Photography",
          description: "description of proposal photography service",
        },
      ],
    },
  },
};

export const SERVICES = Object.entries(CONSTANT_SERVICES);
