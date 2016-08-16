import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


const ACTIVE = { color: 'red' }

export const App = ({ children }) => (
    <div>
        <ul>
            <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
            <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

            <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
            <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

            <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
            <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                           activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

            <li><Link      to="/modules"      activeStyle={ACTIVE}>/modules</Link></li>
        </ul>

        {children}
    </div>
)

export const Index = () => (
    <div>
        <h2>Index!</h2>
    </div>
)

export const Users = ({ children }) => (
    <div>
        <h2>Users</h2>
        {children}
    </div>
)

export const UsersIndex = () => (
    <div>
        <h3>UsersIndex</h3>
    </div>
)

export const User = ({ params: { id } }) => (
    <div>
        <h3>User {id}</h3>
    </div>
)
