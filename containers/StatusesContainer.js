import React from "react";
import { connect } from "react-redux";
import { handleActiveButton, handleCompletedButton, handleAllButton, handleClearCompletedButton } from "../actions/StatusesActions";


const mapStateToProps = (state) => {
    return {
        items: state.listReducer.items,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleActiveButton: () => {
            dispatch(handleActiveButton())
        },
        handleCompletedButton: () => {
            dispatch(handleCompletedButton())
        },
        handleAllButton: () => {
            dispatch(handleAllButton())
        },
        handleClearCompletedButton: () => {
            dispatch(handleClearCompletedButton())
        }
    }
}

const statusesContainer = (props) => {
    const checkedItems = props.items.filter((item) => {
        return item.completed
    });
    const activeItems = props.items.filter(item => {
        return !item.completed;
    });
    return (
        <div>
            <div className="spanElement">
                <span id="itemsLeft">{activeItems.length}</span>
                <span>items left</span>
            </div>
            <div className="statuses">
                <button onClick={props.handleAllButton}>All</button>
                <button onClick={props.handleActiveButton}>Active</button>
                <button onClick={props.handleCompletedButton}>Completed</button>
                <div className="clearCompleted">
                    {checkedItems.length > 0 &&
                    <button onClick={props.handleClearCompletedButton}> Clear Completed</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(statusesContainer);
