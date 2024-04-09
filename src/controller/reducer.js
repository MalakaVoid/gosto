import { ADD_CART, REMOVE } from "./type";

const initialStore = {
    carts: [],
}

export const cartsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0){
                state.carts[itemIndex].qty += 1;
                return {
                   ...state,
                    carts: [...state.carts]
                }
            } else{
                const temp = {...action.payload, qty: 1};
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }
            break;
        case REMOVE:
            let itemInd = state.carts.findIndex((item) => item.id === action.payload);
            state.carts[itemInd].qty -= 1;

            if (state.carts[itemInd].qty <= 0){
                const data = state.carts.filter((el) => el.id !== action.payload);
                return {
                    ...state,
                     carts: data
                 }
            }

            return {
                ...state,
                carts: [...state.carts]
            }
            
        default:
            return state;
    }
}