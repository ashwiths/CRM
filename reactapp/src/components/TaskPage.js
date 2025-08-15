import React, { useState } from 'react';
import './TaskPage.css';

export default function TaskPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Prepare Monthly Financial Report", completed: false },
    { id: 2, text: "Design New Marketing Campaign", completed: false },
    { id: 3, text: "Analyze Customer Feedback", completed: false },
    { id: 4, text: "Update Website Content", completed: false },
    { id: 5, text: "Conduct Market Research", completed: false },
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTaskText.trim(), completed: false }
      ]);
      setNewTaskText('');
      setShowInput(false);
    }
  };

  // Erase all tasks once 5 or more tasks are completed
  const handleToggleCompleted = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    const completedCount = newTasks.filter(task => task.completed).length;
    if (completedCount >= 5) {
      setTasks([]);
      setShowInput(false);
      setNewTaskText('');
    } else {
      setTasks(newTasks);
    }
  };

  return (
    <div className="tasks-page-card">
      <div className="tasks-header-row">
        <h2 className="tasks-title">Tasks</h2>
        <button className="add-task-btn" onClick={() => setShowInput(true)}>
          + Add New Task
        </button>
      </div>
      {showInput && (
        <div className="add-task-input-row">
          <input
            type="text"
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
            placeholder="Enter new task name"
            className="add-task-input"
            autoFocus
          />
          <button className="add-task-confirm" onClick={handleAddTask}>Add</button>
          <button
            className="add-task-cancel"
            onClick={() => { setShowInput(false); setNewTaskText(''); }}
          >Cancel</button>
        </div>
      )}
      <ul className="tasks-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <label className="task-checkbox-label">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
              />
              <span className={task.completed ? "task-text completed" : "task-text"}>
                {task.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
