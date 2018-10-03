import React from "react";
import InputContainer from "../containers/InputContainer";

export default class TestApp extends React.Component {
    render () {
        return (
            <div className="todos">
                <InputContainer />
            </div>
        );
    }
}