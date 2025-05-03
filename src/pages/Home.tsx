import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store"
import { addTask, toggleTask, deleteTask } from '../store/tasksSlice';
import { useState } from "react";

const Home = () => {
    const [ taskText, setTaskText ] = useState('');
    const tasks = useSelector((state: RootState)=> state.tasks.list)
    const dispatch = useDispatch();

    const handelAdd = () => {
        if(taskText.trim() !== ''){
            dispatch(addTask(taskText));
            setTaskText('');
        }
    };
    
    return(
        <div className="container py-5">
            <h1 className="text-primary text-center">To-Do App</h1>
            <div className="d-flex mb-4">
                <input 
                    type="text"
                    className="form-cntrol me-2"
                    placeholder="Add New Task"
                    value={taskText}
                    onChange={(e)=> setTaskText(e.target.value)} 
                />
               <button className="btn btn-success" onClick={handelAdd}>Add</button>
            </div>

            <ul className="list-group">
                {tasks.map((task) =>(
                    <li key={task.id}
                    className="list-group-item d-flex justify-content-between"
                    >
                        <span 
                            onClick={()=>dispatch(toggleTask(task.id))}
                            style={{
                                textDecoration: task.completed ? 'line-through': 'none',
                                cursor: 'pointer'
                            }}
                            >
                                {task.title}
                        </span>
                        <button className="btn btn-denger btn-sm" 
                            onClick={()=> dispatch(deleteTask(task.id))}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Home;