

    // const [state,dispatch] =useReducer(reducer,initialState)

import { useReducer } from "react";

    function reducer(state,action){
        switch(action.type){
            case "INC" :
                return {count : state.count + 1};  // increase count

                case "DEC" :
                    return {count : state.count - 1};  // decrease count

                    case "RESET" :
                        return {count : 0}; //reset count to 0

                        default :
                        return state; // if action type not found - return same state
        }

    }

    export default function CounterUseReducer(){
        const [state,dispatch] = useReducer(reducer,{count:0});
        return(
            <>

             <div className="container mt-2 p-2 w-50 border border-rounded">
                <h2>Count : {state.count}</h2>
              <button onClick={()=> dispatch({type:"INC"})}>Increment</button>
              <button onClick={()=> dispatch({type:"DEC"})}>Decrement</button>
              <button onClick={()=> dispatch({type:"RESET"})}>Reset</button>
             </div>

            </>
        )
    }