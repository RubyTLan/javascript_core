import React, {useState} from 'react'

const To_do_list = () => {
    const [task, setTask] = useState("");
    const [complete, setComplete] = useState(false);
    let [listOfTasks, setListOfTasks] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();
        let taskObj = {task,complete}
        setListOfTasks([...listOfTasks, taskObj]);
    }


    const tickHandler=(e,idx)=>{
        let copy = listOfTasks.map((t,i) => {
            if(i==idx){
                t.complete=!t.complete;
            }
            return t;
        })
        setListOfTasks(copy);
    }

    const deleteTask = (e,idx) => {
        let  copy = listOfTasks.filter((t,i) => {
            return i !== idx;
        })
        setListOfTasks(copy);
    }

    return (
    <div>
        <h1>To Do List</h1>
        <form onSubmit={(e) => submitHandler(e)}>
        <input onChange={(e) => setTask(e.target.value) } type="text" className='form-control'/>

        <button type="submit" className='btn btn-outline-warning'>Add</button>
        </form>
            {

                listOfTasks.map((t, i) => {
                    let a="";
                    if (t.complete){
                    a=a.concat("strike-through")
                    }

                    return(
                        <div key={i}>
                        <h3  className={a}>{t.task}</h3>
                        <input  onChange={(e) => tickHandler(e,i)} type="checkbox" />
                        <button onClick={(e) => deleteTask(e, i)} className="btn btn-danger">Delete</button>
                        </div>
                    ) })
            }



    </div>
    )
}

export default To_do_list
