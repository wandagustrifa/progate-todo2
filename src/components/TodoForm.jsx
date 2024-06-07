import { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addTodo(title)
        setTitle('')
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    console.log(title)

    return (
        <div style={styles.container}>
            <form style={styles.formContainer}
                onSubmit={(event) => {
                    handleSubmit(event)
                }}
            >
                <input
                    type="text"
                    placeholder="Type your Todo"
                    style={styles.formInput}
                    onChange={(event) => {
                        handleChangeTitle(event)
                    }}
                    value={title}
                />
                <button style={styles.button}>Add Todo</button>
            </form>
        </div>
    )
}

const styles = {
    container: {
        marginBottom: '32px',
    },
    formContainer: {
        height: '72px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    formInput: {
        fontSize: '16px',
        padding: '0 16px',
        width: '30%',
    },
    button: {
        fontSize: '16px',
        width: '10%',
        backgroundColor: '#0275d8',
        color: 'white',
        border: 'none'
    },
}

export default TodoForm