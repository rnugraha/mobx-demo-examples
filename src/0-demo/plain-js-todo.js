class TodoStore {
  todos = [];

  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  report() {
    if (this.todos.length === 0) return "<none>";

    const stillTodos = this.todos.filter(todo => todo.completed === false);

    return (
      `Next todo: "${stillTodos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

const todoStore = new TodoStore();

todoStore.addTodo("1 - Pickup some groceries");
console.log(todoStore.report());

todoStore.addTodo("2 - Call Mom");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = "1 - Call Dad";
console.log(todoStore.report());

todoStore.todos[0].task = "Pickup kids";
console.log(todoStore.report());
