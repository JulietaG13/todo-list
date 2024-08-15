import TodoItem from "./TodoItem.jsx";
import PropTypes from "prop-types";

function TodoList({ todos, toggleTodo, deleteTodo }) {

    return (
        <ul className="list">
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => (
                <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoList