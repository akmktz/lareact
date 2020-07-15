import React from 'react';
import {Switch, Route, Redirect, Link, NavLink} from 'react-router-dom'
import './App.scss';
import NavigationBar from './components/NavigationBar.jsx';
import About from './views/About.jsx';
import Home from './views/Home.jsx';
import Test from './views/Test.jsx';
import NotFound from './views/NotFound.jsx';

function App() {
    return (
        <div>
            <header>
                <NavigationBar/>
            </header>
            <div class="container">
                <Switch>
                    <Route exact path='/index.html'>
                        <Redirect to="/"/>
                    </Route>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/test/:message' component={Test}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
