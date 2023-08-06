import TodoList from './components/todo/TodoList'
import TodosContextProvider from './context/todosContext'
import './App.css'

function App() {

    return (
        <>
            <h1>Todo</h1>
            <TodosContextProvider>
                <TodoList />
            </TodosContextProvider>
        </>
    )
}

export default App
