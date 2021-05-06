const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return { ...state, cart: [] };
    }
    if (action.type === "LOADING") {
        return { ...state, loading: true };
    }
    if (action.type === "UNLOADING") {
        return { ...state, loading: false };
    }
    if (action.type === "CART_LOADING") {
        return { ...state, cart: action.payload };
    }
    if (action.type === "REMOVE_ITEM") {
        return {
            ...state,
            cart: state.cart.filter((item) => {
                return item.id !== action.payload;
            }),
        };
    }
    if (action.type === "INCREASE") {
        let tempCart = state.cart.map((item) => {
            if (item.id === action.payload) {
                return { ...item, amount: item.amount + 1 };
            }
            return item;
        });
        return {
            ...state,
            cart: tempCart,
        };
    }
    if (action.type === "DECREASE") {
        let tempCart = state.cart
            .map((item) => {
                if (item.id === action.payload) {
                    return { ...item, amount: item.amount - 1 };
                }
                return item;
            })
            .filter((item) => item.amount !== 0);
        return {
            ...state,
            cart: tempCart,
        };
    }
    if (action.type === "GET_TOTAL") {
        let { total, amount } = state.cart.reduce(
            (acc, item) => {
                const { price, amount } = item;
                const itemTotal = price * amount;
                acc.amount += amount;
                acc.total += itemTotal;
                return acc;
            },
            {
                total: 0,
                amount: 0,
            }
        );
        total = parseFloat(total.toFixed(2));
        return {
            ...state,
            total,
            amount,
        };
    }
    return state;
};

export default reducer;
