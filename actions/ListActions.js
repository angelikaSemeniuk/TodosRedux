export  function handleCheckBoxChange (checked, index) {
    return {
        type: "CHECK_BOX_CHANGE",
        value: checked,
        index: index,
    }
}

export function handleClearButton(index) {
    return {
        type: "HANDLE_CLEAR_BUTTON",
        index: index,
    }
}