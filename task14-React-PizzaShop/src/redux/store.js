import { createStore } from "redux";

function counterReducer(state = { value: 0 }, action) {
    return state;
}

let store = createStore(counterReducer);

console.log(store);

export default store;
