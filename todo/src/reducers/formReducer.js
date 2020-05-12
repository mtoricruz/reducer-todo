export const formReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            // Creating a new ToDo item named from the input value
            // const newItem = {
            //     id: Date.now(),
            //     item: action.payload,
            //     completed: false
            // }
            return [
                ...state,
                {
                    id: Date.now(),
                    item: action.payload,
                    completed: false
                }
                // inputValue: ''
            ]
        case 'TOGGLE_COMPLETE':
            return state.map((task) => {
                return task.id === action.payload ? {...task, completed: !task.completed} : task
            })

        case 'CLEAR_COMPLETE':
            return state.filter(task => !task.completed )

        default:
            return state    
    }
}

// Refactor array of object

export const initialState = [
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
]


// export const initialState = {
//     tasks: [
//     {
//         item: 'Learn about reducers',
//         completed: false,
//         id: 230943209
//     },
//     {
//         item: 'Go to Store',
//         completed: false,
//         id: 23493200
//     }
//     ]
// }

