const generateHTML = (todoItem) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("todoItemWrapper");

  const titleEl = document.createElement("h1");
  titleEl.classList.add("titleEl");
  titleEl.innerText = todoItem.getTitle();
  wrapper.append(titleEl);

  const descriptionEl = document.createElement("h1");
  descriptionEl.classList.add("descriptionEl");
  descriptionEl.innerText = todoItem.getDescription();
  wrapper.append(descriptionEl);

  const dateEl = document.createElement("h1");
  dateEl.classList.add("dateEl");
  const currentDate = todoItem.getDueDate();
  dateEl.innerText = currentDate.toString();
  wrapper.append(dateEl);

  const tagsEl = document.createElement("div");
  tagsEl.classList.add("tagsEl");
  let currentTags = todoItem.getTags();
  currentTags = currentTags.split(",");
  for (let i of currentTags) {
    let currentTagEl = document.createElement("p");
    currentTagEl.innerText = i;
    currentTagEl.classList.add("todoTag");
    tagsEl.appendChild(currentTagEl);
  }
  wrapper.appendChild(tagsEl);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("doneBtn");
  doneBtn.innerText = "✓";
  doneBtn.addEventListener("click", () => {
    titleEl.style.textDecoration = "line-through";
    descriptionEl.style.textDecoration = "line-through";
    dateEl.style.textDecoration = "line-through";
  });
  wrapper.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.innerText = "Delete";
  deleteBtn.addEventListener("click", () => {
    wrapper.style.display = "none";
  });
  wrapper.appendChild(deleteBtn);

  return wrapper;
};

export default generateHTML;
