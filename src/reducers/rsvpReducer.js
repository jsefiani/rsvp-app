const rsvpReducerDefaultState = [];

const rsvpReducer = (state = rsvpReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_GUEST":
            return [...state, action.guest];

        case "REMOVE_GUEST":
            return state.filter((guest) => guest.id !== action.id)

        case "EDIT_GUEST":
            return state.map(guest => {
                if(action.id === guest.id) {
                    return {...guest, ...action.updates};
                } else {
                    return guest;
                }
            })

        case "TOGGLE_CONFIRMATION_GUEST": 
            return state.map(guest => {
                if(action.id === guest.id) {
                    return {...guest, isConfirmed: !guest.isConfirmed}
                } else {
                    return guest;
                }
            })

        case "TOGGLE_EDITING_GUEST":
            return state.map(guest => {
                if (action.id === guest.id) {
                    return { ...guest, isEditing: !guest.isEditing }
                } else {
                    return guest;
                }
            })

        case "SET_NAME_GUEST":
            return state.map(guest => {
                if(action.id === guest.id) {
                    return {...guest, name: action.name}
                } else {
                    return guest;
                }
            })

        default:
            return state;
    }
}

export default rsvpReducer;