import React from "react";
import { connect } from "react-redux";
import { handleCheckBoxChange, handleClearButton } from "../actions/ListActions";

const mapStateToProps = (state) => {
    return {
        items: state.items,
        status: state.status,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckBoxChange: (index, event) => {
            dispatch(handleCheckBoxChange(event.currentTarget.checked, index))
        },
        handleClearButton: (index) => {
            dispatch(handleClearButton(index))
        },
    }
};

const listContainer = (props) => {
    const listItems = props.items.map((item, index) => {
        if (props.status === item.status) {
            return (
                <li key={index}>
                    <input type="checkbox" checked={item.completed} onChange={props.handleCheckBoxChange.bind(this, index)}/>
                    {item.text}
                    <button onClick={props.handleClearButton.bind(this, index)}>X</button>
                </li>
            )
        }
    });
    return (
        <ul className="listItems">{listItems}</ul>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(listContainer);

