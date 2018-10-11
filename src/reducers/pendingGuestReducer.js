const pendingGuestReducerDefaultState = "";

const pendingGuestReducer = (state = pendingGuestReducerDefaultState, action) => {
    switch (action.type) {
        case "SET_PENDING_GUEST":
            return state = action.nameInput;

        case "CLEAR_PENDING_GUEST":
            return state = "";

        default: 
            return state
    }
}

export default pendingGuestReducer;