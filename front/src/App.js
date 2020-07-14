import React from 'react';
import {Switch, Route, Redirect, Link, NavLink} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import About from './views/About.jsx';
import Home from './views/Home.jsx';
import Test from './views/Test.jsx';
import NotFound from './views/NotFound.jsx';

function App() {
    return (
        <div className="App">
            <div className="App-menu">
                <NavLink to="/" exact={true} className="App-link" activeClassName="is-active">Home</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/about" className="App-link" activeClassName="is-active">About</NavLink>
                &nbsp;|&nbsp;
                <NavLink to="/test/hello_world" className="App-link" activeClassName="is-active">Test</NavLink>
                &nbsp;|&nbsp;
                <Link to="/no/such/route" className="App-link">No Such Route</Link>
            </div>
            <header className="App-header">
                <Switch>
                    <Route exact path='/index.html'>
                        <Redirect to="/"/>
                    </Route>

                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/test/:message' component={Test}/>
                    <Route component={NotFound}/>
                </Switch>
            </header>
        </div>
    );
}

export default App;
