import { useState } from "react";
import { useTodosDispatchContext } from "../context/todosContext"

export default function AddTodo () {
    const [newTodo, setNewTodo] = useState('')
    const dispatch = useTodosDispatchContext();

    function addNewTodo () {
        dispatch({
            type: 'add',
            payload: {
                todoText: newTodo
            }
        })
        setNewTodo('')
    }

    return (
        <div className="add-todo">
            <input
                type="text"
                value={ newTodo }
                onChange={ (e) => setNewTodo(e.target.value) }
                onKeyDown={ (e) => {
                    if(e.key === 'Enter') {
                        addNewTodo()
                    }
                }}
            ></input>
            <button
                onClick={() => addNewTodo()}
            >Add New Todo</button>
        </div>
    )
}