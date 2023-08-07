import { useState } from "react";
import { useTodosDispatchContext } from "../../context/todosContext"

function EditingTodo ({
    todo,
    editingTodo,
    setEditingTodo
}) {

    return (
        <input
            type="text"
            value={ editingTodo }
            onChange={(e) => setEditingTodo(e.target.value)}
        ></input>
    )
}

export default function Todo ({ todo }) {
    const [isEditing, setIsEditing] = useState(false)
    const [editingTodo, setEditingTodo] = useState(todo.text)
    const dispatch = useTodosDispatchContext();

    function editTodo () {
        if(isEditing) {
            dispatch({
                type: 'edit',
                payload: {
                    todoId: todo.id,
                    newTodoText: editingTodo,
                }
            })
        }
        setIsEditing(!isEditing)
    }

    function deleteTodo () {
        dispatch({
            type: 'delete',
            payload: {
                todoId: todo.id,
            }
        })
    }

    function toggleTodo () {
        dispatch({
            type: 'toggle',
            payload: {
                todoId: todo.id,
            }
        })
    }

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    checked={ todo.completed }
                    onChange={() => toggleTodo()}
                >
                </input>
                {isEditing
                    ? <EditingTodo
                        todo={ todo }
                        editingTodo={editingTodo}
                        setEditingTodo={setEditingTodo} />
                    : <span>{ todo.text }</span>
                }
            </label>
            <button
                onClick={() => editTodo()}
            >
                {isEditing ? 'Save' : 'Edit'}
            </button>
            <button
                onClick={() => deleteTodo()}
            >
                Delete
            </button>
        </>
    )
}