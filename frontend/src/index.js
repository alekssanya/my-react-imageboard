import './assets/scss/all.scss'
import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/store'
import { Provider } from 'react-redux'

export const Context = createContext(null)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
