export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_PRODUCTS":
            return {
                ...state,
                cart: action.payload.map(item => ({ ...item, quantity: item.quantity || 1 })),
                total: action.payload.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
            };
        

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
                total: state.total - action.payload.price * action.payload.quantity
            };
            case "INCREASE_QUANTITY":
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    ),
                    total: state.total + action.payload.price
                };
            
                case "DECREASE_QUANTITY":
                    return {
                        ...state,
                        cart: state.cart.map(item =>
                            item.id === action.payload.id && item.quantity > 1
                                ? { ...item, quantity: item.quantity - 1 }
                                : item
                        ),
                        total: state.total - (action.payload.quantity > 1 ? action.payload.price : 0)
                    };
                
        case "CLEAR_CART":
            return { cart: [], total: 0 };
        default:
            return state;
    }
};


export const initialState = {
    cart: [],
    total: 0, // اضافه کردن مقدار اولیه
};

