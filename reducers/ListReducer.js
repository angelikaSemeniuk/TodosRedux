const initialState = { items: [], inputValue: "" }

const listReducer = (state=initialState, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE_ON_INPUT": {
            return state = Object.assign({}, state, {inputValue: action.value});
        }
        case "HANDLE_SUBMIT_ON_INPUT" : {
            return state = Object.assign({}, state, {
                items: [...state.items, {text: state.inputValue, completed: false, status: "active"}],
                inputValue: "",
            })
        }
        case "CHECK_BOX_CHANGE" : {
            return state = Object.assign({}, state, {
                items: state.items.map((item, index) => {
                    if (index === action.index) {
                        return Object.assign({}, item, {
                            completed: action.value,
                            status: "completed",
                        })
                    }
                    return item
                })
            })
        }
        case "HANDLE_CLEAR_BUTTON" : {
            state.items.splice(action.index, 1);
            return state = Object.assign({}, state, {
                items: [...state.items]
            })
        }
        case "HANDLE_CLEAR_COMPLETED_BUTTON" : {
            for(let i = 0; i< state.items.length; i++) {
                if(state.items[i].completed) {
                    state.items.splice(i,1);
                    i--;
                }
            }
            return state = Object.assign({}, state, {
                items: [...state.items]
            })
        }
    }
    return state
}

export default listReducer