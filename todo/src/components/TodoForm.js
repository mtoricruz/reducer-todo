import React, { useState, useReducer, useEffect } from 'react';
import { formReducer, initialState } from '../reducers/formReducer';
import './TodoForm.css';

function TodoForm() {
    const [newTodoText, setNewTodoText] = useState('')
    const [state, dispatch] = useReducer(formReducer, initialState)

    const handleChanges = e => {
        setNewTodoText(e.target.value);
    };

    useEffect(() => {
        console.log('STATE', state)
    }, []) 

    const handleSubmit = e => {
        e.preventDefault()
        console.log('click')
        dispatch({ type: 'ADD_TODO', payload: newTodoText })
        setNewTodoText('')
    }

    const toggleComplete = id => {
        dispatch({ type: 'TOGGLE_COMPLETE', payload: id })
    }

    const clearComplete = () => {
        // e.preventDefault()
        dispatch({ type: 'CLEAR_COMPLETE'})
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
                <button
                    onClick={() => clearComplete()}
                >
                    Clear Completed Tasks
                </button>
            </form>
            <div>
                {state.map(task => {
                    return (
                        <p 
                            key={task.id} 
                            className={task.completed ? 'complete' : ''}
                            onClick={() => toggleComplete(task.id)}
                        >{task.item}</p>
                    )}
                )}
            </div>    
        </div>    
    );
}

export default TodoForm