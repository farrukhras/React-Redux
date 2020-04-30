import {createStore, combineReducers} from "redux"
import countReducer from "./count"
import favThingsReducer from "./favThings"

//create store with combined reducers
const rootReducer = combineReducers({
    count: countReducer,
    favThings: favThingsReducer
})

const store = createStore(
    rootReducer,
    // the following is just a google chrome extension to see the redux results in a cool way
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store

