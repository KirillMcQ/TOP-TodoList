const appendHTML = (element) => {
  const htmlAppendDiv = document.querySelector(".todoItems");
  htmlAppendDiv.appendChild(element);
};

export default appendHTML;
