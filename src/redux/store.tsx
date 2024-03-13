import { combineReducers, createStore } from "redux";
import pizzaReducer from "./pizzaReducer";
import basketReducer from "./basketReducer";


const rootReducer = combineReducers({
    pizza: pizzaReducer,
    basket: basketReducer,
})
export const store = createStore(rootReducer)

