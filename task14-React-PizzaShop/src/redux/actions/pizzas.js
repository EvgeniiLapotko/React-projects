
export const setLoaded = val => (
    {
        type: 'SET_LOADED',
        payload: val,
}
)

export const fetchPizzas = () =>  async(dispatch) => {
    dispatch(setLoaded(false))
    const resolve =  await fetch('http://localhost:4000/pizzas');
        const data = await resolve.json();
        dispatch(setPizzas(data));
}


export const setPizzas = (items) => {
    return { type: "SET_PIZZAS", payload: items };
};
