const initialState = { items: [], inputValue: "" };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_CHANGE_ON_INPUT": {
            return state = Object.assign({}, state, {inputValue: action.value});
        }
        case "HANDLE_SUBMIT_ON_INPUT" : {
            return state = Object.assign({}, state, {
                items: [...state.items, {text: state.inputValue, completed: false}],
                inputValue: "",
            })
        }
        case "CHECK_BOX_CHANGE" : {
            return state = Object.assign({}, state, {
                items: state.items.map((item, index) => {
                    if(index === action.index) {
                        return Object.assign({}, item, {
                            completed: action.value
                        })
                    }
                    return item
                })
            })
        }
    }
    return state;
};

export default reducer;