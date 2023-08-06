export default function Todo ({ todo }) {
    return (
        <>
            <label>
                <input
                    type="checkbox"
                >
                </input>
                { todo.text }
            </label>
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}