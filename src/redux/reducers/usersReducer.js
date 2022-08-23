const initialState = {
    loggedUser: null,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                loggedUser: action.payload,
            }
        default:
            return state
    }
}

export default usersReducer