import {StaticImageData} from "next/image";

import icon from "@/assets/icon.png";

export interface Service {
  title: string;
  items: string[];
  iconSrc: StaticImageData;
}
export const services: Service[] = [
  {
    title: "General Health",
    items: ["Allergies", "Cough", "Diabetes", "Fever", "Headache"],
    iconSrc: icon,
  },
  {
    title: "Skin Care",
    items: ["Acne", "Eczema", "Psoriasis", "Rashes", "Warts"],
    iconSrc: icon,
  },
  {
    title: "Sexual Health",
    items: [
      "Chlamydia",
      "Genital Warts",
      "Gonorrhea",
      "Herpes",
      "Syphilis",
    ],
    iconSrc: icon,
  },
  {
    title: "Prescription Renewals",
    items: [
      "Chlamydia",
      "Genital Warts",
      "Gonorrhea",
      "Herpes",
      "Syphilis",
    ],
    iconSrc: icon,
  },
];
