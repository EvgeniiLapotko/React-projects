const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialState, action) => {
    if (action.type === "SET_TOTAL_PRICE") {
        return {
            ...state,
            totalPrice: action.payload,
        };
    }
    if (action.type === "SET_TOTAL_COUNT") {
        return {
            ...state,
            totalPrice: action.payload,
        };
    }
    if (action.type === "DELETE_PIZZAS") {
        return {
            ...state,
            items: {},
            totalPrice: 0,
            totalCount: 0,
        };
    }
    if (action.type === "ADD_PIZZA_CART") {
        const newItems = {
            ...state.items,
            [action.payload.id]: !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id], action.payload],
        };

        const arrPiz = [].concat.apply([], Object.values(newItems));
        const arrTotalPrice = arrPiz.reduce((acc, obj) => acc + obj.price, 0);
        return {
            ...state,
            items: newItems,
            totalCount: arrPiz.length,
            totalPrice: arrTotalPrice,
        };
    }
    return state;
};

export default cart;
