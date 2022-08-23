const categoriesActions = {
    setCategory: (category) => {
        return (dispatch, getState) => {
                    dispatch({
                        type: 'CATEGORY', payload: category
                    })
            }
        },
    setCategories: (categories) => {
        return (dispatch, getState) => {
                    dispatch({
                        type: 'CATEGORIES', payload: categories
                        
                    })
            }
        }
    }

export default categoriesActions; 