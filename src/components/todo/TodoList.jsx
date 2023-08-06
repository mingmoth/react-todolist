import { useTodosContext } from "../../context/todosContext";
import Todo from "./Todo";

export default function TodoList () {
    const todos = useTodosContext()

    return (
        <>
            <ul>
                {todos.map(todo => (
                    <li key={ todo.id }>
                        <Todo todo={ todo } />
                    </li>
                ))}
            </ul>
        </>
    )
};