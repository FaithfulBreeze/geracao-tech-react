import { useRef } from "react";

const TaskInfoScreen = ({ createTask }) => {
    const titleInput = useRef()
    const descriptionInput = useRef()
    function getInputValues(){
        createTask({
            title: titleInput.current.value,
            description: descriptionInput.current.value
        })
    }
    return (
        <div id="taskInfoScreen">
            <label htmlFor="taskTitle">Task title:</label> <br />
            <input type="text" id="taskTitle" placeholder="Task title" ref={titleInput}/>
            <br />
            <label htmlFor="takDescription">Task description:</label> <br />
            <textarea id="taskDescription" placeholder="Task description" ref={descriptionInput}></textarea>
            <button onClick={getInputValues}>Add task</button>
        </div>
    );
}
 
export default TaskInfoScreen;