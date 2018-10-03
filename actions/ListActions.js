export  function handleCheckBoxChange (checked, index) {
    console.error("action-index in checkBoxChange", index);
    console.error("action-event in checkBoxChange", checked);
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