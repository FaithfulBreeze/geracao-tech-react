import { useState } from "react";
import TodoCard from "./TodoCard";
import TaskInfoScreen from "./TaskInfoScreen";
import Overlay from "./Overlay";

const Main = ({ tasks, setTaskArray }) => {
    const [taskInfoScreen, setTaskInfoScreen] = useState(false)
    function createTask(taskData){
        setTaskInfoScreen(prev => !prev)
        if(taskData.title && taskData.description){
            setTaskArray(prev => [...prev, taskData])
        }
    }
    return ( 
        <main>
            {taskInfoScreen && <Overlay setTaskInfoScreen={setTaskInfoScreen} taskInfoScreen={taskInfoScreen} />}
            {taskInfoScreen && <TaskInfoScreen createTask={createTask} />}
            <div className="space_between_container">
                {tasks.length == 0 ? <h2>Nenhuma task por aqui...</h2> : <h2>Tasks</h2>}
                <button onClick={createTask}>Create Task</button>
            </div>
            <ul>
                {tasks.map(({ title, description }, index) => (
                    <TodoCard key={index} title={title} description={description} />
                ))}
            </ul>
        </main>
     );
}
 
export default Main;