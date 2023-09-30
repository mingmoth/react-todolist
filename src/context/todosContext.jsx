import { createContext, useContext, useReducer } from "react";
import { todosReducer } from '../reducer/todosReducer';
import { initialTodos } from "../config/todos";

export const TodosContext = createContext(null);

export const TodosDispatchContext = createContext(null);

export function useTodosContext () {
    return useContext(TodosContext)
}

export function useTodosDispatchContext () {
    return useContext(TodosDispatchContext)
}

export default function TodosContextProvider ({ children }) {
    const [todos, dispatch] = useReducer(todosReducer, initialTodos)

    return (
        <TodosContext.Provider value={ todos }>
            <TodosDispatchContext.Provider value={ dispatch }>
                { children }
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    )
}