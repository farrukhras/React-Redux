import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {increment, decrement, addNum, deleteNum} from './redux/count'
import {addFavThing, removeFavThing} from './redux/favThings'

/* we can now basically connect the entire redux state to our App component. To do that we have 2 functions
provided to us from react-redux. 
1. useSelector() = gets the entire state from the store. We can store this state in a variable
2. useDispatch() = is used to dispatch a function to change some state on the screen and as well in the store
*/

function App() {

  const myState = useSelector(state => state)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h2>Counter: {myState.count}</h2>

      {/*the onCLick handler will take in function which calls the dispatch function which performs the action */}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h2>My favourite things are: </h2>
      <p>{myState.favThings}</p>
      
      <h3>Add Favourite things</h3>
      <button onClick={() => dispatch(addFavThing("Ice-Cream!  "))}>Ice-Cream</button> <br />
      <button onClick={() => dispatch(addFavThing("Hiking!  "))}>Hiking</button> <br />
      <button onClick={() => dispatch(addFavThing("Movies!  "))}>Movies</button> <br />
      
      <h3>Remove Favourite things</h3>
      <button onClick={() => dispatch(removeFavThing("Ice-Cream!  "))}>Ice-Cream</button> <br />
      <button onClick={() => dispatch(removeFavThing("Hiking!  "))}>Hiking</button> <br />
      <button onClick={() => dispatch(removeFavThing("Movies!  "))}>Movies</button> <br />
    </div>
  )
}

export default App
