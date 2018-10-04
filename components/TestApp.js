import React from "react";
import InputContainer from "../containers/InputContainer";
import ListContainer from "../containers/ListContainer";
import StatusesContainer from "../containers/StatusesContainer";

export default class TestApp extends React.Component {
    render () {
        return (
            <div className="todos">
                <InputContainer />
                <ListContainer/>
                <StatusesContainer/>
            </div>
        );
    }
}