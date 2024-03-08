import toDoList from "../../assets/to-do-list.png";
import logicalGames from "../../assets/logical-games.png";
import hrsLibrary from "../../assets/hrs.library.png";
import work1 from "../../assets/work1.jpg";

export const projectsData = [
  {
    id: 1,
    image: work1,
    title: "E-commerce shop UI",
    technologies: "",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Frontend",
  },
  {
    id: 2,
    image: hrsLibrary,
    title: "Book searching app",
    technologies: "HTML CSS JavaScript React API",
    description:
      "This web application is a minimalist tool for quickly accessing book information. The straightforward search allows you to input the title, and instantly receive essential details, letting you focus solely on what matters most - the content of the books. Fast, convenient, and without any unnecessary clutter.",
    category: "Frontend",
    live: "https://hubertsleszynski.github.io/library_api_v2/",
    github: "https://github.com/HubertSleszynski/library_api_v2",
  },
  {
    id: 3,
    image: work1,
    title: "Job searching app",
    technologies: "HTML CSS TAILWIND JS REACT NODE MONGODB EXPRESS ",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Fullstack",
  },
  {
    id: 4,
    image: work1,
    title: "Pizza Shop",
    technologies: "HTML CSS JS REACT NODE MONGODB",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni voluptas voluptates modi asperiores facilis dignissimos rerum quis at, sit ullam velit dolorum harum, ut dolores nemo! Animi possimus architecto fugiat.",
    category: "Fullstack",
  },
  {
    id: 5,
    image: toDoList,
    title: "To Do List",
    technologies: "HTML CSS JavaScript React",
    description:
      "The to-do list application is a tool designed for efficient task management. With its dynamic user interface, you can easily add, remove, and mark tasks as completed. It ensures smooth and instant updates, allowing you to track progress without unnecessary delays. Is it possible to complete a portfolio without this?",
    category: "Basics",
    live: "https://hubertsleszynski.github.io/to-do-list/",
    github: "https://github.com/HubertSleszynski/to-do-list",
  },
  {
    id: 6,
    image: logicalGames,
    title: "Logical games",
    technologies: "HTML CSS JavaScript",
    description:
      "The app features a central platform with four buttons providing access to various logic games. Here, you'll find an exciting Memory game, a mind-engaging Sudoku, a Puzzle Slider challenge, and the classic Tic Tac Toe. Simple navigation and an aesthetic design ensure a pleasant user experience, allowing easy transitions between different logic games.",
    category: "Basics",
    live: "https://hubertsleszynski.github.io/four-logical-games/",
    github: "https://github.com/HubertSleszynski/four-logical-games",
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
