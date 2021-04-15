import Task from "./Task"

const Tasks = ({tasks,onDelete,onChangeReminder}) => {

    return (
        <div>
            {tasks.map(task=><Task key={task.id} task={task} onDelete={onDelete} onChangeReminder={onChangeReminder}/>)}
        </div>
    )
}

export default Tasks
