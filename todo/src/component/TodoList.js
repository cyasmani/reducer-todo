import React, {useState, useReducer} from 'react'
import { initialState, reducer } from '../reducer/reducer'
import './TodoList.css'

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [todo, setTodo] = useState()

    const handleChange = event => {
        setTodo(event.target.value)

    }

    console.log(todo)
    console.log(state)
    console.log(reducer)

    
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={() => dispatch({type:'addTask', payload: todo})}>Add Task</button>
            <button onClick={() => dispatch({type:"RemoveCompleted"})}>Remove Completed Task</button>
            <button onClick={() => dispatch({type:"RemoveAllTasks"})}>Remove all tasks</button> 
            {state.map((item) => {
                return (

                    !item.completed ? ( <p className="notcomplete" onClick={() => dispatch({type: 'MarkComplete', payload: item.id})}>{item.task}</p> ): (
                    
                    <p className="complete" onClick={() => dispatch({ type:"MarkComplete", payload: item.id})}>{item.task}</p>
                    )
            )}
                
            
                    
            )}

            
        </div>
    )
}

export default TodoList