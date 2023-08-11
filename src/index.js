import todoItem from "./components/todoItem.js";
import "./styles/home.css";

const addTodoBtn = document.querySelector(".addItemBtn");

addTodoBtn.addEventListener("click", () => {
  const userTitle = document.querySelector(".todoTitle").value;
  const userDescription = document.querySelector(".todoDescription").value;
  const userDate = document.querySelector(".todoDueDate").value;
  let newTODO = new todoItem(userTitle, userDescription, userDate);
  console.log(newTODO);
});
