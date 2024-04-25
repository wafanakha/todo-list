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

const actItem_Title = document.createElement("h4");
const actItem_check = document.createElement("button");
const actItem_del = document.createElement("button");

const activitiesItem = document.createElement("div");
const itemButtonGroup = document.createElement("div");
const actItem_Title_text = document.createTextNode("EXAMPLE 1");

allActivites.appendChild(allActivites_text);
today.appendChild(today_text);
thisWeek.appendChild(thisWeek_text);

projectsTitle.appendChild(projectsTitle_text);

addProjects.appendChild(addProjects_text);

activitiesList.appendChild(allActivites);
activitiesList.appendChild(today);
activitiesList.appendChild(thisWeek);

projectsList.appendChild(addProjects);

mainWindow.style.backgroundImage = `url(${img})`;

sideBar.appendChild(activitiesList);
sideBar.appendChild(projectsTitle);
sideBar.appendChild(projectsList);

actItem_Title.appendChild(actItem_Title_text);
activitiesItem.appendChild(actItem_Title);
itemButtonGroup.appendChild(actItem_check);
itemButtonGroup.appendChild(actItem_del);
activitiesItem.appendChild(itemButtonGroup);

mainWindow.appendChild(activitiesItem);

document.body.appendChild(sideBar);
document.body.appendChild(mainWindow);
