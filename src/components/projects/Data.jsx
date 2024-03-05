import toDoList from "../../assets/to-do-list.png";
import logicalGames from "../../assets/logical-games.png";
import work3 from "../../assets/work3.jpg";
import work4 from "../../assets/work4.jpg";

export const projectsData = [
  {
    id: 1,
    image: work3,
    title: "E-commerce shop UI",
    technologies: "",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Frontend",
  },
  {
    id: 2,
    image: work3,
    title: "Book searching app",
    technologies: "",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Frontend",
  },
  {
    id: 3,
    image: work3,
    title: "Job searching app",
    technologies: "HTML CSS TAILWIND JS REACT NODE MONGODB EXPRESS ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Fullstack",
  },
  {
    id: 4,
    image: work4,
    title: "Pizza Shop",
    technologies: "HTML CSS JS REACT NODE MONGODB",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Fullstack",
  },
  {
    id: 5,
    image: logicalGames,
    title: "Logical games",
    technologies: "HTML CSS JS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, sunt architecto! Harum provident assumenda corrupti est, nam magnam consequatur quam quisquam inventore ducimus, ex voluptatibus impedit pariatur modi quia rem!",
    category: "Basics",
    live: "https://hubertsleszynski.github.io/four-logical-games/",
    github: "https://github.com/HubertSleszynski/four-logical-games",
  },
  {
    id: 6,
    image: toDoList,
    title: "To Do List",
    technologies: "HTML CSS JS REACT",
    description: "Could a resume be completed without it?",
    category: "Basics",
    live: "https://hubertsleszynski.github.io/to-do-list/",
    github: "https://github.com/HubertSleszynski/to-do-list",
  },
];

export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Basics",
  },
  {
    name: "Frontend",
  },
  {
    name: "Fullstack",
  },
];
