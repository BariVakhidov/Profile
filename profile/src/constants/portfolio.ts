import socialNetwork from "assets/images/carrot2.png"
import tasks from "assets/images/tasks.png"
import check from "assets/images/fcheck.png"
import calculator from "assets/images/calculator.png"
import fetcher from "assets/images/fetcher.png"
import portfolio from "assets/images/portfolio.png"
import Tictactoe from "assets/images/Tictactoe.png"
import store from "assets/images/store.png"
import procr from "assets/images/procr.png"
import { ProjectProps } from "components/Potrfolio/Project"

export const portfolioData:ProjectProps[] = [
    {
        image: socialNetwork,
        href: "https://barivakhidov.github.io/my-app",
        name: "Social network",
        description: "React, Redux, AJAX, thunks, TypeScript",
    },
    {
        image: tasks,
        href: "https://github.com/BariVakhidov/test-app",
        name: "Tasks",
        description: "React, Redux, AJAX, thunks",
    },
    {
        image: check,
        href: "https://barivakhidov.github.io/simple-flight-check/",
        name: "Flight check",
        description: "React, Redux, AJAX, sagas",
        },
        {
        image: calculator,
        href: "https://barivakhidov.github.io/calculator/",
        name: "Calculator",
        description: "React, TypeScript",
    },
    {
        image: fetcher,
        href: "https://github.com/BariVakhidov/data-fetcher",
        name: "Data fetcher",
        description: "React, TypeScript, SCSS",
    },
    {
        image: portfolio,
        href: "https://barivakhidov.github.io/Profile",
        name: "Profile",
        description: "React, TypeScript, ThreeJS HTML, SCSS, JS, jQuery",
    },
    {
        image: Tictactoe,
        href: "https://github.com/BariVakhidov/Tic-tac-toe",
        name: "Tic-tac-toe",
        description: "Java",
    },
    {
        image: store,
        href: "https://barivakhidov.github.io/Store",
        name: "Uber Eats",
        description: "HTML, CSS, flexboxgrid2",
    },
    {
        image: procr,
        href: "https://barivakhidov.github.io/Procrastination/",
        name: "Procrastination",
        description: "HTML, CSS, JS",
    },
]