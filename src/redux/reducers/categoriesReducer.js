const initialState = {
    category: null,
    categories: []
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default categoriesReducer;