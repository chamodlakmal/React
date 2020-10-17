import React, {Component} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {cancelGame, startGame} from "../actions/settings";
import Instructions from "./Instructions";

class App extends Component {


    render() {
        console.log(this);
        return (
            <div>
                <h2>♠️ ♣️ Evens or Odds ♦ ️♥️️</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The Game is on!</h3>
                            <br/>
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits!</h3>
                            <br/>
                            <button onClick={this.props.startGame}>Start Game</button>
                            <hr/>
                            <Instructions/>
                        </div>
                    )
                }

            </div>
        );
    }

}

const mapStateToProps = state => {
    return {gameStarted: state.gameStarted}
};

const mapDispatchToProps = dispatch => {
    return {
        startGame: () => dispatch(startGame()),
        cancelGame: () => dispatch(cancelGame())
    };
};

const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);
