const TaskList = (props) => {
    const tasks = props.tasks;
    const title = props.title;
    return (
        <div className="task-list">
            <div className="container">
                <h2 className="task-title">{title}</h2>
                {tasks.map((task) => (
                    <div className="task-preview" key={task.id}>
                        <h3>{task.name}</h3>
                        <span>Date</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default TaskList
