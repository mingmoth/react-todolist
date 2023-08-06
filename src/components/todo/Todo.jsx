import { useTodosDispatchContext } from "../../context/todosContext"

export default function Todo ({ todo }) {
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
                { todo.text }
            </label>
            <button>Edit</button>
            <button
                onClick={() => deleteTodo()}
            >Delete</button>
        </>
    )
}