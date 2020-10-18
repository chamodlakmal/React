import React, {Component} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {cancelGame, startGame} from "../actions/settings";
import Instructions from "./Instructions";
import {fetchNewDeck} from "../actions/deck";
import fetchStates from '../reducers/fetchState';
import DrawCard from "./DrawCard";
import Card from "./Card";
import Guess from "./Guess";

class App extends Component {

    startGame = () => {
        this.props.startGame();
        this.props.fetchNewDeck();


    };


    render() {

        if (this.props.fetchState === fetchStates.error) {
            return (
                <div>
                    <p>Please try to reload the app. An error occurred.</p>
                    <p>
                        {this.props.message}
                    </p>
                </div>
            )
        }

        return (
            <div>
                <h2>♠️ ♣️ Evens or Odds ♦ ️♥️️</h2>
                {
                    this.props.gameStarted ? (
                        <div>
                            <h3>The Game is on!</h3>
                            <br/>
                            <Guess/>
                            <br/>
                            <DrawCard/>
                            <hr/>
                            <Card/>
                            <hr/>
                            <button onClick={this.props.cancelGame}>Cancel Game</button>
                        </div>
                    ) : (
                        <div>
                            <h3>A new game awaits!</h3>
                            <br/>
                            <button onClick={this.startGame}>Start Game</button>
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

    const {
        settings: {gameStarted},
        deck: {fetchState, message}
    } = state;

    return {gameStarted, fetchState, message}
};

// const mapDispatchToProps = dispatch => {
//     return {
//         startGame: () => dispatch(startGame()),
//         cancelGame: () => dispatch(cancelGame()),
//         fetchNewDeck: () => dispatch(fetchNewDeck())
//     };
// };

const componentConnector = connect(mapStateToProps, {startGame, cancelGame, fetchNewDeck});

export default componentConnector(App);
