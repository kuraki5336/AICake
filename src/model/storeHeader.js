const initState = {
    stateidnex: 0
};

const store = {
    change: 'change'
}

const storeHeader = (state = initState, action) => {
    switch (action.type) {
        case store.change: {
            state.stateidnex = action.payload;
            return state;
        }
        default:
            return state;
    }
};

export { storeHeader };