import todoItem from "./components/todoItem.js";
import generateHTML from "./components/generateHTML.js";
import appendHTML from "./components/appendHTML.js";
import "./styles/home.css";

const addTodoBtn = document.querySelector(".addTodoBtn");

addTodoBtn.addEventListener("click", () => {
  const userTitle = document.querySelector(".todoTitle").value;
  const userDescription = document.querySelector(".todoDescription").value;
  const userDate = document.querySelector(".todoDueDate").value;
  let userTags = document.querySelector(".todoTags").value;
  let newTODO = new todoItem(userTitle, userDescription, userDate, userTags);
  console.log(newTODO);
  appendHTML(generateHTML(newTODO));
});
