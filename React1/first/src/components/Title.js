import React, {Component} from 'react';

const TITLES = [
    'a software engineer',
    'a music lover',
    'an enthusiastic learners',
    'an adventure seeker'
];

class Title extends Component {
    state = {titleIndex: 0,fadeIn:true}

    componentDidMount() {
        this.timeOut=setTimeout(()=>this.setState({fadeIn:false}),2000)
        this.animateTitles();
    }

    componentWillUnmount() {

        clearInterval(this.titleInterval)
        clearTimeout(this.timeOut)
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            this.setState({titleIndex: (this.state.titleIndex + 1) % TITLES.length,fadeIn:true})
            this.timeOut=setTimeout(()=>this.setState({fadeIn:false}),2000)
        }, 4000)

    }

    render() {
        const{fadeIn} =this.state;
        const title = TITLES[this.state.titleIndex];

        return (
            <p className={fadeIn?'title-fade-in':'title-fade-out'}>I am {title}</p>
        )
    }
}

export default Title;