export const formReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            // Creating a new ToDo item named from the input value
            const newItem = {
                id: Date.now(),
                item: action.payload,
                completed: false
            }
            return {
                ...state,
                tasks: [...state.tasks, newItem]
                // inputValue: ''
            }
        case 'TOGGLE_COMPLETE':
            return {
                
            }    
        default:
            return state    
    }
}

export const initialState = {
    tasks: [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 230943209
    },
    {
        item: 'Go to Store',
        completed: false,
        id: 23493200
    }
    ],
    formValue: ""
}
