export const itemAdding = () => {
  const mainWindow = document.querySelector(".main");
  const activitiesItem2 = document.createElement("div");
  const actItem_Title2 = document.createElement("h4");
  const actItem_check2 = document.createElement("button");
  const actItem_del2 = document.createElement("button");
  const itemButtonGroup2 = document.createElement("div");
  const actItem_check_icon2 = document.createElement("span");
  const actItem_del_icon2 = document.createElement("span");

  const actItem_Title_text2 = document.createTextNode("EXAMPLE 1");
  actItem_check_icon2.classList.add("material-symbols-outlined");
  actItem_del_icon2.classList.add("material-symbols-outlined");
  const actItem_check_text2 = document.createTextNode("check");
  const actItem_del_text2 = document.createTextNode("delete");

  actItem_Title2.appendChild(actItem_Title_text2);
  activitiesItem2.appendChild(actItem_Title2);
  actItem_check_icon2.appendChild(actItem_check_text2);
  actItem_del_icon2.appendChild(actItem_del_text2);
  actItem_check2.appendChild(actItem_check_icon2);
  actItem_del2.appendChild(actItem_del_icon2);

  itemButtonGroup2.appendChild(actItem_check2);
  itemButtonGroup2.appendChild(actItem_del2);
  activitiesItem2.appendChild(itemButtonGroup2);

  mainWindow.appendChild(activitiesItem2);
};

export const itemClear = () => {};
