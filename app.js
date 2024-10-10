const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON

// In-memory "database"
let tasks = [];
let taskId = 1;

// Root route to respond to GET requests at "/"
app.get('/', (req, res) => {
    res.send('Welcome to the RESTful API');
});

// Create a new task (POST)
app.post('/tasks', (req, res) => {
    const { title, description } = req.body; // Require title and description
    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required' });
    }
    const newTask = { id: taskId++, title, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Get all tasks (GET)
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Get a task by ID (GET)
app.get('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
});

// Update a task by ID (PUT)
app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ error: 'Task not found' });
    
    const { title, description, completed } = req.body;
    task.title = title !== undefined ? title : task.title;
    task.description = description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    
    res.json(task);
});

// Delete a task by ID (DELETE)
app.delete('/tasks/:id', (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ error: 'Task not found' });
    
    tasks.splice(taskIndex, 1);
    res.status(204).send(); // No content
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
