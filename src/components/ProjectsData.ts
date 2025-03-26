import restaurant from "../assets/images/restaurant.png";
import image from "../assets/images/image.png";

export interface IProject {
  title: string;
  img: string;
  desc?: string;
  live: string;
  source: string;
  short?: string;
  tags: string[];
}

export const items: IProject[] = [
  {
    title: "Mqingwana Attorneys",
    img: image,
    desc: "Mqingwana & Partners Inc. is a dynamic law firm in Johannesburg, specializing in Commercial Law, Litigation, Employment Law, and Conveyancing since 1997.",
    live: "https://www.mqingwanaattorneys.com/",
    source: "https://github.com/SisandaSH/Mqingwana-attorneys.git",
    short: "Law Firm",
    tags: [
      "Project",
    ],
  },
  {
    title: "Restaurant Chooser",
    img: restaurant,
    desc: "An app that helps partners and families to feast on the best meals that all can enjoy",
    live: "https://restaurant-chooser-csywjp39u-sisandashs-projects.vercel.app/",
    source: "https://github.com/SisandaSH/Restaurant-Chooser.git",
    short:
      "Restaurant App",
    tags: [
      
 
    ],
  },
  
];
