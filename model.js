"use strict";
let nextId = 1;
// 3. addTask operation
function addTask(tasks, title) {
    const newTask = { id: nextId++, title, status: "todo" };
    return [...tasks, newTask];
}
// 4. completeTask operation
function completeTask(tasks, id) {
    return tasks.map((t) => (t.id === id ? { ...t, status: "done" } : t));
}
// 5. filterByStatus operation
function filterByStatus(tasks, status) {
    return tasks.filter((t) => t.status === status);
}
// 6. REQUIRED EXTRA: Custom typed operation (deleteTask)
function deleteTask(tasks, id) {
    return tasks.filter((t) => t.id !== id);
}
