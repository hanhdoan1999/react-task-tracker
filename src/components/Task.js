import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete ,onChangeReminder}) => {
    
    return (
              //
        <div className ={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={()=>onChangeReminder(task)}>
            <h3>{task.text} <FaTimes onClick={()=>{onDelete(task)}} style={{color:'red', cursor:'poiter'}}/> </h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
