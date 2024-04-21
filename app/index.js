import _ from "lodash";
import "./main.css";

const sideBar = document.createElement("nav");
const mainWindow = document.createElement("main");

const activitiesList = document.createElement("ul");
const projectsList = document.createElement("ul");

const allActivites = document.createElement("li");
const today = document.createElement("li");
const thisWeek = document.createElement("li");

activitiesList.appendChild(allActivites);
activitiesList.appendChild(today);
activitiesList.appendChild(thisWeek);

sideBar.appendChild(activitiesList);
document.body.appendChild(sideBar);
document.body.appendChild(mainWindow);
