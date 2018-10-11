import { createStore, combineReducers } from 'redux';

// Import Reducer
import rsvpReducer from "../reducers/rsvpReducer";
import pendingGuestReducer from "../reducers/pendingGuestReducer";
import filterReducer from "../reducers/filterReducer";

export default () => {
    // Creating a store
    const store = createStore(
        combineReducers({
            pendingGuest: pendingGuestReducer,
            isFiltered: filterReducer,
            guests: rsvpReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};