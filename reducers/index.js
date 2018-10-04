const initialState = { items: [], inputValue: "", status: "all"};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE_ON_INPUT": {
            return state = Object.assign({}, state, {inputValue: action.value});
        }
        case "HANDLE_SUBMIT_ON_INPUT" : {
            return state = Object.assign({}, state, {
                items: [...state.items, {text: state.inputValue, completed: false, status: "all"}],
                inputValue: "",
            })
        }
        case "CHECK_BOX_CHANGE" : {
            return state = Object.assign({}, state, {
                items: state.items.map((item, index) => {
                    if (index === action.index) {
                        return Object.assign({}, item, {
                            completed: action.value
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
        case "HANDLE_ACTIVE_BUTTON" : {
            state.items.forEach((item) => {
                if(!item.completed) {
                    item.status = "active"
                }
            });
            return state = Object.assign({}, state, {
                items: [...state.items],
                status: "active"
            })
        }
        case "HANDLE_COMPLETED_BUTTON" : {
            state.items.forEach((item) => {
                if(item.completed) {
                    item.status = "completed"
                }
            });
            return state = Object.assign({}, state, {
                items: [...state.items],
                status: "completed"
            })
        }
        case "HANDLE_ALL_BUTTON" : {
            state.items.forEach((item) => {
                    item.status = "all"
            });
            return state = Object.assign({}, state, {
                items: [...state.items],
                status: "all"
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
    return state;
};

export default reducer;