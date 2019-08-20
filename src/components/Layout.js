import React from 'react';
// import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
// import { RoutedTabs, NavTab } from "react-router-tabs";
import DominoConfig from './DominoConfig.js';
import DominoConsole from './DominoConsole.js';
import DominoLogs from './DominoLogs.js';
import DominoTasks from './DominoTasks.js';

/*
  React component showing Layout and Navbar
*/
export class Layout extends React.Component {
    render() {
        /*
        return (
            <Router>
                <div>
                    <nav>
                        <ul className="nav nav-tabs" id="domino-menu">
                            <li><Link to={'/domino-control/tasks'} className="nav-link">Tasks</Link></li>
                            <li><Link to={'/domino-control/console'} className="nav-link">Console</Link></li>
                            <li><Link to={'/domino-control/logs'} className="nav-link">Logs</Link></li>
                            <li><Link to={'/domino-control/config'} className="nav-link">Config</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/domino-control/config' component={DominoConfig} />
                        <Route exact path='/domino-control/console' component={DominoConsole} />
                        <Route exact path='/domino-control/logs' component={DominoLogs} />
                        <Route exact path='/domino-control/tasks' component={DominoTasks} />
                    </Switch>
                </div>
            </Router>
        );
        */

        return (
            <Router>
                <div id="domino-layout">
                    <nav className="domino-navbar">
                        <NavLink
                            to={'/domino-control/tasks'}
                            activeClassName="domino-navbar-is-active"
                            activeStyle={{ color:'red' }}
                        >Tasks</NavLink>
                        <NavLink
                            to={'/domino-control/console'}
                            activeClassName="domino-navbar-is-active"
                            activeStyle={{ color:'red' }}
                        >Console</NavLink>
                        <NavLink
                            to={'/domino-control/logs'}
                            activeClassName="domino-navbar-is-active"
                            activeStyle={{ color:'red' }}
                        >Logs</NavLink>
                        <NavLink
                            to={'/domino-control/config'}
                            activeClassName="domino-navbar-is-active"
                            activeStyle={{ color:'red' }}
                        >Config</NavLink>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/domino-control/config' component={DominoConfig} />
                        <Route exact path='/domino-control/console' component={DominoConsole} />
                        <Route exact path='/domino-control/logs' component={DominoLogs} />
                        <Route exact path='/domino-control/tasks' component={DominoTasks} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

/*
Layout.propTypes = {
    onChange: PropTypes.func.isRequired,
};
*/
