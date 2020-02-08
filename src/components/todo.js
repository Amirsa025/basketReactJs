import React,{useState} from 'react';

const Todo = (props) => {

   const [TodoName,setTodoName] = useState('')
   const [todoList,setTodoList]=useState([]);
    const handleChange = (e)=>{
       setTodoName(e.target.value)
    }
    const TodoAddhandler =()=>{
        setTodoList(todoList.concat(TodoName))
    }
    return (
        <div>
           <form className="form-group">
           <label htmlFor="input" ></label>
            <input value={TodoName} onChange={handleChange} className="  form-control"></input>
           </form>
            <button onClick={TodoAddhandler} className="btn btn-primary mr-3  ">Add</button>
            <ul className="list-group mt-3">
                {todoList.map(item=>(
                    <li key={item} className="list-group-item text-center mb-2">{item}</li>
                ))}
            </ul>
        </div>
        
    );
}

export default Todo;
