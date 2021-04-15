import  { useState } from 'react';

const Add = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSunmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Please add a text')
        }

        onAdd({text , day , reminder})
        setText('')
        setDay('')
        setReminder(false)

    }
    return (
     <form action="" className="add-form" onSubmit={onSunmit}>
         <div className="form-control">
             <label>Task</label>
            <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
             
         </div>
         <div className="form-control">
                <label>Day & Time</label>
                 <input type="text" placeholder="Add time" value={day} onChange={(e) => setDay(e.target.value)}/>
         </div>
         <div className="form-control form-control-check">
              <label>Set reminder</label>
              <input checked={reminder} type="checkbox" value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
         </div>

         <input type="submit" value="Save Task" className="btn btn-block"/>
     </form>
    )
}

export default Add
