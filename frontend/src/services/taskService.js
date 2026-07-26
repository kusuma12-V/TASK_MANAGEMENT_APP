import api from "./api";

// Get all tasks
export const getTasks = () => api.get("/tasks");

// Add a new task
export const addTask = (task) => api.post("/tasks", task);

// Update a task
export const updateTask = (id, task) => api.put('/tasks/${id}', task);

// Delete a task
export const deleteTask = (id) => api.delete('/tasks/${id}');