import React from 'react';
import CSSModuleExample from './css-modules/index'

import {Index, Users, UsersIndex, User, App as AppRouter} from './router/index'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default class App extends React.Component {

    render() {
        return (
        <Router history={browserHistory}>
            <Route path="/" component={AppRouter}>
                <IndexRoute component={Index}/>
                <Route path="/modules" component={CSSModuleExample}/>
                <Route path="users" component={Users}>
                    <IndexRoute component={UsersIndex}/>
                    <Route path=":id" component={User}/>
                </Route>
            </Route>
        </Router>
        );
    }

};
