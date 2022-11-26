import {useEffect, useState} from 'react'
import {Header} from './components/Header'
import {Tasks} from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([])

    function loadSavedTasks() {
        const saved = localStorage.getItem('tasks');
        if (saved) {
            setTasks(JSON.parse(saved));
        }
    }

    function setTasksAndSave(newTasks) {
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    }

    useEffect(() => {
        loadSavedTasks();
    }, [])

    function addTask(taskTitle) {
        setTasksAndSave([...tasks, {
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
        }]);
    }

    function deleteTaskById(taskId) {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasksAndSave(newTasks);
    }

    function toggleTaskCompletedById(taskId) {
        const newTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task;
        });
        setTasksAndSave(newTasks);
    }

    return (
        <div className=''>
            <Header handleAddTask={addTask}/>
            <Tasks tasks={tasks}
                   onDelete={deleteTaskById}
                   onComplete={toggleTaskCompletedById}
            />
        </div>
    )
}

export default App
