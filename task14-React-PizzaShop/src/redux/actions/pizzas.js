export const setLoaded = (val) => ({
    type: "SET_LOADED",
    payload: val,
});

export const fetchPizzas = (category, sortBy) => async (dispatch) => {
    dispatch(setLoaded(false));
    const resolve = await fetch(
        `http://localhost:4000/pizzas?${
            category !== null ? `category=${category}` : ""
        }&_sort=${sortBy}&_order=desc`
    );
    const data = await resolve.json();
    dispatch(setPizzas(data));
};

export const setPizzas = (items) => {
    return { type: "SET_PIZZAS", payload: items };
};
