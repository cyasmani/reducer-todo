

export const initialState = [
    {
        task: "Drink tea with Ghandi",
        completed: false,
        id: 123

    },
    {
        task: "Save the dinosaurs from the meteor",
        completed: false,
        id: 234
    },
    {
        task: "Develop a UFO and troll the world",
        completed: false,
        id: 345
    }

]

//I need to add task, mark task as completed, remove completed task and remove all

export const reducer = (state, action) => {
    switch(action.type){
        case 'addTask':
            if(action.payload === ''){
                return {
                    state
                }
            }

            const newTask = {
                task: action.payload,
                completed: false,
                id: Date.now()
            }

            return[...state, newTask]
        
        case 'MarkComplete':
            return state.map((todo) => (todo.id === action.payload ? {...todo, completed: !todo.completed} : todo ))

        
        case 'RemoveCompleted':
            return state.filter((todo) => !todo.completed)
            
        case 'RemoveAllTasks':
            return [];

        default:
            return state
    }
}
