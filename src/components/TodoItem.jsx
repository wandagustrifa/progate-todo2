const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
    const getTodoTitleStyle = () => {
        if (todo.completed === true) {
            return { textDecoration: 'line-through' }
        } else {
            return { textDecoration: 'none' }
        }
    }

    return (
        <div style={styles.todoItem}>
            <input
                type="checkbox"
                style={styles.checkbox}
                onChange={() => { toggleCompleted(todo.id) }}
            />
            <p style={getTodoTitleStyle()}>{todo.title}</p>
            <button 
                style={styles.button}
                onClick={() => {deleteTodo(todo.id)}}
            >x</button>
        </div>
    )
}

const styles = {
    todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '15px'
    },
    checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
        display: 'inline'
    },
    button: {
      backgroundColor: 'white',
      color: 'red',
      height: '30px',
      width: '30px',
      borderRadius: '100%',
      border: '2px solid red',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: 'bold'
    },
}

export default TodoItem;