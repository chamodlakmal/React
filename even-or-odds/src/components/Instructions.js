import React from 'react';
import {collapseInstructions, expandInstructions} from "../actions/settings";
import {connect} from "react-redux";

const Instructions = props => {
    const {instructionsExpanded, collapseInstructions, expandInstructions} = props;
    if (instructionsExpanded) {
        return (
            <div>
                <h3>Instructions</h3>
                <p>Welcome to evens or odds. The game goes like this.</p>
                <p>Welcome to evens or odds. The game goes like this.</p>
                <p>Welcome to evens or odds. The game goes like this.</p>
                <p>Welcome to evens or odds. The game goes like this.</p>
                <button onClick={collapseInstructions}>Read Less</button>
            </div>
        );
    }
    return (
        <div>
            <h3>Instructions</h3>
            <p>Welcome to evens or odds. The game goes like this.</p>
            <button onClick={expandInstructions}>Read more</button>
        </div>
    );


};

const mapStateToProps = state => {
    return {instructionsExpanded: state.instructionsExpanded}
};

const mapDispatchToProps = dispatch => {
    return {
        expandInstructions: () => dispatch(expandInstructions()),
        collapseInstructions: () => dispatch(collapseInstructions())
    };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(Instructions)