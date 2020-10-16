import React, {Component} from 'react';
import '../App.css';
import {connect} from "react-redux";

class App extends Component {
    render() {
        console.log(this);
        return (
            <div>
                Even OR Odd React App
            </div>
        );
    }

}

const componentConnector = connect();

export default componentConnector(App);
