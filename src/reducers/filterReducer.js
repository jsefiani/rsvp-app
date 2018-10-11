const filterReducerDefaultState = false

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case "TOGGLE_FILTER": 
            return state = !state
        
        default:
            return state
    }
}

export default filterReducer;