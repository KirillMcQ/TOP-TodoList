class todoItem {
  constructor(title, description, dueDate, tags = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.tags = tags;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getTags() {
    return this.tags;
  }
}

export default todoItem;
