import uniqid from "uniqid";

export const addGuest = ({ name }) => ({
    type: "ADD_GUEST",
    guest: {
        id: uniqid(),
        name,
        isConfirmed: false,
        isEditing: false
    }
});

export const removeGuest = ({id}) => ({
    type: "REMOVE_GUEST",
    id
});

export const editGuest = (id, updates) => ({
    type: "EDIT_GUEST",
    id, 
    updates
});

export const toggleConfirmation = (id) => ({
    type: "TOGGLE_CONFIRMATION_GUEST",
    id
})

export const toggleEditing = (id) => ({
    type: "TOGGLE_EDITING_GUEST",
    id
})

export const setNameGuest = (name, id) => ({
    type: "SET_NAME_GUEST",
    name,
    id,
})

export const setPendingGuest = (nameInput) => ({
    type: "SET_PENDING_GUEST",
    nameInput
})

export const clearPendingGuest = () => ({
    type: "CLEAR_PENDING_GUEST"
})

export const toggleFilter = () => ({
    type: "TOGGLE_FILTER"
})