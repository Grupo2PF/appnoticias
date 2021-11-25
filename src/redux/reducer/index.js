const initialState = {
    noticias: [],
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_NOTICES":
            return {
                ...state,
                noticias: action.payload,
            }
        default:
            return state;
    }
}