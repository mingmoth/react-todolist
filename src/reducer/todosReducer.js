export function todosReducer (todos, action) {
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