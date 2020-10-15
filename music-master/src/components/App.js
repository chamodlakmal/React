import React, {Component} from 'react';
import '../App.css';

class App extends Component {
    state = {artistQuery: ''};

    render() {
        return (
            <div>
                <h2>Music Master</h2>
                <input placeholder='Search for an Artist'/>
                <button>Search</button>
            </div>
        );
    }

}

export default App;
