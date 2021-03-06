import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import storeFactory from './store'
import { Provider } from 'react-redux'
require('dotenv').config()

// Register service worker to control making site work offline

const initialState = (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {}
const store = storeFactory(initialState)
window.React = React
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)

  const saveState = () => {
    const state = JSON.stringify(store.getState())
    localStorage['redux-store'] = state
  }
  store.subscribe(saveState)