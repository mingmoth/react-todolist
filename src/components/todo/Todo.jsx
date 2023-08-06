import { useState } from "react";
import { useTodosDispatchContext } from "../../context/todosContext"

function EditingTodo ({ todo, isEditing }) {
    const [editingTodo, setEditingTodo] = useState(todo.text)

    // function editTodo () {
    //     console.log('edit')
    //     dispatch({
    //         type: 'edit',
    //         payload: {
    //             todoId: todo.id,
    //             newTodoText: editingTodo,
    //         }
    //     })
    // }

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
    const dispatch = useTodosDispatchContext();

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
                    ? <EditingTodo todo={ todo } isEditing={isEditing} />
                    : <span>{ todo.text }</span>
                }
            </label>
            <button
                onClick={() => {
                    setIsEditing(!isEditing)
                }}
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