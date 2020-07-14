import React from 'react';
import logo from '../images/logo.svg';

class About extends React.Component {
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Learn React</p>
                </a>
            </div>
        );
    }
}

export default About;
