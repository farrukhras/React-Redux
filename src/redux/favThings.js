/*
In case we have multiple state and that too whcih are complex, we can split the action creators
and the reducers in seperate files based on each state. Then we can export the reducer from each file 
to the index.js file and there we can combine all the reducers and then pass them to the Store.
*/

//action creators
export function addFavThing(thing) {
    return {
        type: "ADD_FAV_THING",
        payload: thing
    }
}

export function removeFavThing(thing) {
    return {
        type:"REMOVE_FAV_THING",
        payload: thing
    }
}

//reducer
export default function favThingsReducer(favouriteThings = [], action) {
    switch (action.type) {
        case "ADD_FAV_THING":
            return [...favouriteThings, action.payload]

        case "REMOVE_FAV_THING":
            const updatedArray = favouriteThings.filter(thing => 
                thing.toLowerCase() !== action.payload.toLowerCase()
            )
            return updatedArray
            
        default:
            return favouriteThings
    }
}
