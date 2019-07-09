getDate();
const todos = getSavedTodos();

const filters = {
  searchText: "",
  hideCompleted: false
};

renderTodos(todos, filters);

// todos.forEach(function(todo) {
//   const p = document.createElement("p");
//   p.textContent = todo.text;
//   document.querySelector("#todos").appendChild(p);
// });

// // Listen for new todo creation
// document.querySelector("#add").addEventListener("click", function() {
//   console.log("Add a new");
// });

// Listen for todo text change
// document.querySelector("#new-todo").addEventListener("input", function(e) {
//   console.log(e.target.value);
// });

document
  .querySelector("#filtered-todos")
  .addEventListener("input", function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters); //call it again tp rerender it with the data as filters changed
  });

document.querySelector("#todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.newTodo.value,
    complete: false
  });

  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.newTodo.value = "";
});

document.querySelector("#hide").addEventListener("change", function(e) {
  console.log(e.target.checked);
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});