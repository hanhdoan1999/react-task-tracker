import { BrowserRouter as Router,Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState  , useEffect } from 'react'
import Add from './components/Add'
import Footer from './components/Footer'
import About from './components/About'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  useEffect( () => {

    const getTasks= async ()=>{
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()

    // fetchTasks();
    
 
  },[])


  //Fetch Tasks

  const fetchTasks = async ()=>{
    const res= await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    console.log(data);
    return data;
  }


    //Fetch Task

    const fetchTask = async (id)=>{
      const res= await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data;
    }

   //Delete task
  const handelDelete = async (task) => {
    await fetch(`http://localhost:5000/tasks/${task.id}`,{
      method:'DELETE'
    })

    setTasks(tasks.filter(t=>t.id !== task.id)) 

  };

  //Add task
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json() //task them moi

    setTasks([...tasks,data])



    // const id = Math.floor(Math.random() * 10000) +1
    // const newTask = {id,...task}
    // setTasks([...tasks,newTask])
  }



  const handelChangeReminder= async(t) =>{
    const taskToToggle = await fetchTask(t.id)
    const upTask ={...taskToToggle,reminder : !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${t.id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(upTask),
    })

    const data = await res.json()


   setTasks(
     tasks.map((task)=>task.id===t.id ? {...task,reminder:data.reminder} : task)
   )
  };
  return (
    <Router>
    <div className="container">
      <Header title={'Task Tracker'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* Neu path la / thi cho hien thi tasks */}
      <Route path='/' exact render={(props)=>(
        <>
      {showAddTask &&  <Add onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={handelDelete} onChangeReminder={handelChangeReminder}/> : 'No tag'}
        </>
      )}></Route>
      <Route path="/about" component={About} ></Route>
      <Footer/>
    </div>
    </Router>
  )

}


export default App
