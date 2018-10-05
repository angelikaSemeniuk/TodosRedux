const initialState = { status : "all" };

const statusesReducer = ( state=initialState, action ) => {
    switch (action.type) {
        case "HANDLE_ACTIVE_BUTTON" : {
            return state = Object.assign({}, state, {
                status: "active",
            })
        }
        case "HANDLE_COMPLETED_BUTTON" : {
            return state = Object.assign({}, state, {
                status: "completed",
            })
        }
        case "HANDLE_ALL_BUTTON" : {
            return state = Object.assign({}, state, {
                status: "all",
            })
        }
    }
    return state
}

export default statusesReducer