import { useState, useEffect } from "react";
import TaskList from './TaskList'

const Tasks = () => {
    const [tasks, setTasks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/tasks')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTasks(data);
            })
    }, []);

    return (
        <div>
            {tasks && <TaskList tasks={tasks} title='Today Tasks'/>}
        </div>
    );
}

export default Tasks;
