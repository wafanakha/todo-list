import _ from "lodash";
import "./main.css";
import img from "./img/scrampled.png";

const sideBar = document.createElement("nav");
const mainWindow = document.createElement("main");

const activitiesList = document.createElement("ul");
const projectsList = document.createElement("ul");

const allActivites = document.createElement("li");
const today = document.createElement("li");
const thisWeek = document.createElement("li");

const addProjects = document.createElement("li");

const projectsTitle = document.createElement("h2");

const allActivites_text = document.createTextNode("All Activities");
const today_text = document.createTextNode("Today");
const thisWeek_text = document.createTextNode("This Week");

const projectsTitle_text = document.createTextNode("Projects");

const addProjects_text = document.createTextNode("Add Project");

allActivites.appendChild(allActivites_text);
today.appendChild(today_text);
thisWeek.appendChild(thisWeek_text);

projectsTitle.appendChild(projectsTitle_text);

addProjects.appendChild(addProjects_text);

activitiesList.appendChild(allActivites);
activitiesList.appendChild(today);
activitiesList.appendChild(thisWeek);

projectsList.appendChild(addProjects);

sideBar.appendChild(activitiesList);
sideBar.appendChild(projectsTitle);
sideBar.appendChild(projectsList);
document.body.appendChild(sideBar);
document.body.appendChild(mainWindow);
