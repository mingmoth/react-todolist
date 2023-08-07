import { createContext, useContext, useReducer } from "react";

const initialTodos = [
    { id: 0, text: 'Philosopher’s Path', completed: true },
    { id: 1, text: 'Visit the temple', completed: false },
    { id: 2, text: 'Drink matcha', completed: false }
  ];

export const TodosContext = createContext(null);

export const TodosDispatchContext = createContext(null);

export function useTodosContext () {
    return useContext(TodosContext)
}

export function useTodosDispatchContext () {
    return useContext(TodosDispatchContext)
}

function todosReducer (todos, action) {
    switch(action.type) {
        case 'add':
            return [
                ...todos,
                {
                    id: new Date(),
                    text: action.payload.todoText,
                    completed: false,
                }
            ]
        case 'delete':
            return todos.filter(todo => todo.id !== action.payload.todoId);
        case 'edit':
            return todos.map((todo) => {
                if(todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        text: action.payload.newTodoText,
                    };
                }
                return todo;
            })
        case 'toggle':
            return todos.map((todo) => {
                if(todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        default:
            return todos;
    }
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