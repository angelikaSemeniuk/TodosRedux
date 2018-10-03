import React from "react";
import { connect } from "react-redux";
import { handleCheckBoxChange } from "../actions/ListActions";

const mapStateToProps = (state) => {
    console.error("action-ListContainer state", state);
    return {
        items: state.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleCheckBoxChange: (index, event) => {
            dispatch(handleCheckBoxChange(event.currentTarget.checked, index))
        }
    }
};

const ListContainer = (props) => {
    const listItems = props.items.map((item, index) => {
        return (
            <li key={index}>
                <input type="checkbox" checked={item.completed} onChange={props.handleCheckBoxChange.bind(this, index)}/>
                {item.text}
            </li>
        );
    })
    return (
        <ul className="listItems">{listItems}</ul>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);

