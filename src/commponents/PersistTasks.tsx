import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../store/store';
import { addTask } from "../store/tasksSlice";

const PersistTasks = () => {
    const tasks = useSelector((state: RootState) => state.tasks.list);
    const dispatch =useDispatch();

    useEffect(()=>{
        const data = localStorage.getItem('tasks');
        if (data) {
            const parsed = JSON.parse(data);
            parsed.forEach((task: any) => {
                dispatch(addTask(task.title));
            });
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    return null;
};
export default PersistTasks;
