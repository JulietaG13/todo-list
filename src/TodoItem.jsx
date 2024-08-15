import PropTypes from "prop-types";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li key={id}>
            <label>
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}/>
                {title}
            </label>
            <button
                className="btn btn-danger"
                onClick={() => deleteTodo(id)}
            >
                Delete
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.any,
    title: PropTypes.string,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem