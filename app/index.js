import _ from "lodash";
import "./main.css";

const sideBar = document.createElement("nav");
const mainWindow = document.createElement("main");

const activitiesList = document.createElement("ul");
const projectsList = document.createElement("ul");

const allActivites = document.createElement("li");
const today = document.createElement("li");
const thisWeek = document.createElement("li");

const projectsTitle = document.createElement("h2");

const allActivites_text = document.createTextNode("All Activities");
const today_text = document.createTextNode("Today");
const thisWeek_text = document.createTextNode("This Week");

const projectsTitle_text = document.createTextNode("Projects");

allActivites.appendChild(allActivites_text);
today.appendChild(today_text);
thisWeek.appendChild(thisWeek_text);

projectsTitle.appendChild(projectsTitle_text);

activitiesList.appendChild(allActivites);
activitiesList.appendChild(today);
activitiesList.appendChild(thisWeek);

sideBar.appendChild(activitiesList);
sideBar.appendChild(projectsTitle);
sideBar.appendChild(projectsList);
document.body.appendChild(sideBar);
document.body.appendChild(mainWindow);
