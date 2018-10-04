import React from "react";
import { connect } from "react-redux";
import { handleSubmitOnInput, handleChangeOnInput } from "../actions/InputActions";

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (event) => {
            dispatch(handleChangeOnInput(event.target.value))
        },
        handleSubmit: (event) => {
            event.preventDefault();
            dispatch(handleSubmitOnInput());
        }
    }
};


const inputContainer = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text"  value= {props.inputValue} onChange={props.handleChange} />
        </form>
    )
};

export default connect(mapStateToProps, mapDispatchToProps)(inputContainer);
