import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: 0,
    category: "CPU",
    description: "Central Processing Unit - the brain of the computer",
    image:
      "https://dlcdnwebimgs.asus.com/gain/B9B3F542-45F3-4C59-9BC1-25B8A1B7CCB1/w240/h175",
  },
  {
    _id: 1,
    category: "GPU",
    description:
      "Graphics Processing Unit - responsible for rendering images, videos, and animations",
    image:
      "https://dlcdnwebimgs.asus.com/gain/01480520-08BA-439E-A626-2E3D6F0D9908/w240/h175",
  },
  {
    _id: 2,
    category: "RAM",
    description:
      "Random Access Memory - temporary storage for data that the CPU needs to access quickly",
    image:
      "https://dlcdnwebimgs.asus.com/gain/D8D19FB9-2485-478F-9E58-4344265E0E69/w240/h175",
  },

  {
    _id: 3,
    category: "Monitor",
    description: "Displays the visual output from the computer",
    image:
      "https://dlcdnwebimgs.asus.com/gain/718462E2-0FF1-424B-8070-9EE75A96DC64/w240/h175",
  },

  {
    _id: 4,
    category: "Cabinet",
    description:
      "Enclosure or case for housing and protecting the computer components",
    image:
      "https://dlcdnwebimgs.asus.com/gain/30D1F34B-0C37-4D9D-92E4-487372FD254F/w240/h175",
  },

  {
    _id: 5,
    category: "PSU",
    description: "Devices for long-term data storage, such as SSDs and HDDs",
    image:
      "https://dlcdnwebimgs.asus.com/gain/DD0607BB-A52B-4947-81D4-6E90FFE609C1/w240/h175",
  },
];
