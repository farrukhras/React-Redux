/*
In case we have multipl state and that too whcih are complex, we can split the action creators
and the reducers in seperate files based on each state. Then we can export the reducer from each file 
to the index.js file and there we can combine all the reducers and then pass them to the Store.
*/

// Creating a simple counter store which stores the state of the count whnever a button is clicked and 
// effectively modifies the store
// we can increment or decrement the count

//action creators
export function increment() { // add just 1 to count on each click
    return {
        type: "INCREMENT"
    }
}

export function decrement() { // subtract just 1 from count on each click
    return {
        type:"DECREMENT",
    }
}

export function addNum(num) { // add custom number to count on a click
    return {
        type:"ADD_NUM",
        payload: num
    }
}

export function deleteNum(num) { // delete custom number from count on a click
    return {
        type:"DELETE_NUM",
        payload: num
    }
}

//reducer
export default function countReducer(count= 0, action) {
    switch (action.type) {
        case "INCREMENT":
            return count + 1

        case "DECREMENT":
            return count - 1

        case "ADD_NUM":
            return count + action.payload
            
        case "DELETE_NUM":
            return count - action.payload

        default:
            return count 
    }
}