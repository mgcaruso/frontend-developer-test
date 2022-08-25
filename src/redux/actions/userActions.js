const userActions = {
            userSignIn: (loggedUser) => {
                return async (dispatch, getState) => {
                        localStorage.setItem('user', JSON.stringify(loggedUser))
                        dispatch({
                            type: 'USER',
                            payload: loggedUser
                        })
                    }
            },
                userSignOut: () => {
                    return (dispatch, getState) => {
                        localStorage.removeItem('user')
                        dispatch({
                            type: 'USER', 
                            payload: null
                        })
                    }
                },
    }

export default userActions 