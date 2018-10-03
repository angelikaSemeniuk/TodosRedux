import React from "react";
import InputContainer from "../containers/InputContainer";
import ListContainer from "../containers/ListContainer";

export default class TestApp extends React.Component {
    render () {
        return (
            <div className="todos">
                <InputContainer />
                <ListContainer/>
            </div>
        );
    }
}