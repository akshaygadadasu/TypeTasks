let nextId = 1;

// 1. TaskStatus literal union
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// 3. addTask operation
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = { id: nextId++, title, status: "todos" };
  return [...tasks, newTask];
}

// 4. completeTask operation
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}

// 5. filterByStatus operation
function filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
  return tasks.filter((t) => t.status === status);
}

// 6. REQUIRED EXTRA: Custom typed operation (deleteTask)
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter((t) => t.id !== id);
}
