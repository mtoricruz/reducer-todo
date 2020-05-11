import React, { useState, useReducer, useEffect } from 'react';
import { formReducer, initialState } from '../reducers/formReducer'

function TodoForm() {
    const [newTodoText, setNewTodoText] = useState('')
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    useEffect(() => {
        console.log(state)
    }, []) 

    const handleSubmit = e => {
        e.preventDefault()
        console.log('click')
        dispatch({ type: 'ADD_TODO', payload: newTodoText })
        setNewTodoText('')
    }

    return (
        <div className='add-task'>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChanges}
                    value={newTodoText}
                    type='text'
                    name='newTodoText'
                />
                <button>
                    Add Task
                </button>    
            </form>
            <div>
                {state.tasks.map(task => {
                    return (
                        <p key={task.id}>{task.item}</p>
                    )}
                )}
            </div>    
        </div>    
    );
}

export default TodoForm