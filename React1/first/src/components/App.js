import React, {Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfile';
import profile from '../assets/profile.png';
import Title from './Title';

class App extends Component {

    constructor() {
        super();
        this.state = {showInfo: false};
        this.toggleElement = this.toggleElement.bind(this);
    }

    toggleElement() {
        this.setState({showInfo: !this.state.showInfo})
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile' style={{width: 100, height: 100}}/>
                <h1>Hello!</h1>
                <p>I am Chamod Lakmal</p>
                <Title/>

                {this.state.showInfo ?
                    (<div>
                        <p>Chamod Lakmal</p>

                        <button onClick={this.toggleElement}>Show Less</button>

                    </div>) : (<div>
                        <button onClick={this.toggleElement}>Show More</button>
                    </div>)
                }
                <hr/>
                <Projects/>
                <SocialProfiles/>

            </div>
        )
    }
}



export default App;
