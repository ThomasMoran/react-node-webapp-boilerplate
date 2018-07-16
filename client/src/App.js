import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        name: ""
    };
  }

  
    getUser = () => {
        // Get the passwords and store them in state
        fetch('/api/name')
            .then(res => res.json())
            .then(data => {
                let name = data.name;
                console.log(name);
                this.setState({ "name": name })}
            );
            // .then(data => console.log(data.name));
    }
    
    // Fetch passwords after first mount
    componentDidMount() {
        this.getUser();
    }

    render() {
        let name = this.state.name;
        
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <h2>
                    {name}
                </h2>
            </div>
        );
    }
}

export default App;
