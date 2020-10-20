import React from 'react';
import {connect} from "react-redux";


const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo123';

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessesRecordKey));

    if (correctGuesses > record) {
        localStorage.setItem(correctGuessesRecordKey, correctGuesses);

        return {record: correctGuesses, isNewRecord: true}
    }
    return {record, isNewRecord: false}

};

const GameState = ({correctGuesses, remaining}) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';

    const {record, isNewRecord} = checkRecord(correctGuesses);

    const recordLabel = isNewRecord ? 'New Record' : 'Record';
    return (
        <div>
            <h3>{recordLabel} : {record}</h3>
            <p>{remaining} cards Remaining</p>
            <p>{correctGuesses} Correct {guessText}</p>
        </div>
    )
};

function mapStateToProps(state) {
    return {correctGuesses: state.gameState.correctGuesses, remaining: state.deck.remaining}

}


export default connect(mapStateToProps
    /*({
         deck: {remaining},
         gameState: {correctGuesses}
     }) => ({remaining, correctGuesses})*/
)(GameState)