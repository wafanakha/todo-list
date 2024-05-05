export const itemAdding = () => {
  const mainWindow = document.querySelector("main");

  const addingActivities = document.createElement("div");
  addingActivities.classList.add("data");
  document.body.appendChild(addingActivities);

  const inputTitle = document.createElement("input");
  const inputDate = document.createElement("input");
  inputDate.type = "date";
  const buttonOk = document.createElement("span");
  const buttonOk_text = document.createTextNode("OK");
  const addingForm = document.createElement("form");

  buttonOk.appendChild(buttonOk_text);
  addingForm.appendChild(inputTitle);
  addingForm.appendChild(inputDate);
  addingForm.appendChild(buttonOk);
  addingActivities.appendChild(addingForm);

  buttonOk.addEventListener("click", () => {
    const activitiesItem2 = document.createElement("div");
    const actItem_Title2 = document.createElement("h4");
    const actItem_check2 = document.createElement("button");
    const actItem_del2 = document.createElement("button");
    const itemButtonGroup2 = document.createElement("div");
    const actItem_check_icon2 = document.createElement("span");
    const actItem_del_icon2 = document.createElement("span");

    const actItem_Title_text2 = document.createTextNode(inputTitle.value);
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

    activitiesItem2.classList.add("items");
    addingActivities.style.visibility = "hidden";

    const activitiesItems = document.querySelectorAll(".items");
    activitiesItems.forEach(function (e) {
      e.addEventListener("click", itemClear);
    });
  });
};

export const itemClear = function () {
  this.remove();
};
