import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/index.js'
import {Provider} from 'react-redux'
// import {increment, decrement, addNum, deleteNum} from './redux/count'
// import {addFavThing, removeFavThing} from './redux/favThings'

// RUN npm start and go to the browser and then to the console and see the output of following actions
// that were dispatched

// store.dispatch(increment())
// console.log(store.getState())
// store.dispatch(decrement())
// console.log(store.getState())
// store.dispatch(addNum(5))

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
