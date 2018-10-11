import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Importing actions
import { addGuest } from "./actions/rsvpActions";

// Import Redux store
import configureStore from './store/configureStore';

// Configure state
const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(state);
})

store.dispatch(addGuest({
    name: "Jawad",
}));

store.dispatch(addGuest({
    name: "Nawal",
}));


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
