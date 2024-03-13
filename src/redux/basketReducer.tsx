import { Action } from "redux";
import { TypePizza } from "./pizzaReducer";
import { TYPES_PIZZA } from "./TypeReducer";

// export type TypePizza = {
//     img: string,
//     title: string,
//     description: string,
//     price: number
// }

export interface AddPizzaAction extends Action {
    type: string;
    payload?: Action;
}

const initial = {
    pizza: (JSON.parse(localStorage.getItem("basket")) || []) as TypePizza[],
}
export default function basketReducer(state = initial, action: AddPizzaAction) {
    switch (action.type) {
        case TYPES_PIZZA.ADD_BASKET:
            return { ...state, pizza: action.payload };
        case TYPES_PIZZA.DELETE_BASKET:
            return { ...state, pizza: action.payload };
        default:
            return state;
    }
}