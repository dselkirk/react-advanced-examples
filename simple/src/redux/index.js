import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import {Counter} from './components/index'
import counter from './reducers'

const rootEl = document.getElementById('root')
const store = createStore(counter)

function render() {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        />,
        rootEl
    )
}

//render()
//store.subscribe(render)