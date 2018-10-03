export function handleSubmitOnInput() {
    return {
        type: "HANDLE_SUBMIT_ON_INPUT"
    }
}

export function handleChangeOnInput (value) {
    return {
        type: "HANDLE_CHANGE_ON_INPUT",
        value: value,
    }
}

