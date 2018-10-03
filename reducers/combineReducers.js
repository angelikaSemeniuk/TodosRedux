const initialState = { items: [], inputValue: "" };

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case "HANDLE_CHANGE_ON_INPUT": {
            return Object.assign({}, state, {inputValue: action.value});
        }
        case "HANDLE_SUBMIT_ON_INPUT" : {
            return state = Object.assign({}, state, {
                items: [...state.items, {text: state.inputValue, completed: "false"}],
                inputValue: "",
            })
        }
    }
    return state;
}