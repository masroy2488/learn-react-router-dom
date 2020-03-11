import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './index.css';

import App from './components/App';
import Users from './components/Users';
import Contact from './components/Contact';
import NotFound from './components/Notfound';

const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <NavLink exact activeClassName="active" to="/"> Home </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/users"> Users </NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/contact"> Contact </NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/users/" component={Users} />
                <Route path="/contact"component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
)