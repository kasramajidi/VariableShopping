import { createContext, useReducer } from "react";
import {cartReducer, initialState} from "./CartReducer";
export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cart: state.cart, total: state.total, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

