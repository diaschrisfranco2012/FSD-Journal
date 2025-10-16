const express = require('express');
const colors = require('colors');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // to read JSON from frontend

// 🧠 Temporary in-memory "database"
let tasks = [
  { id: 1, title: "Finish React project", completed: false },
  { id: 2, title: "Study Node.js integration", completed: false }
];

// 🛠️ Routes
// Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// Add new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Toggle task completion
app.put('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
});

// Delete task
app.delete('/api/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(t => t.id !== taskId);
  res.json({ message: "Task deleted" });
});

// Serve static files if needed
app.use(express.static(path.join(__dirname)));

// Root route
app.get('/', (req, res) => {
  res.send('Server is Working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}/`.blue.bold);
});
