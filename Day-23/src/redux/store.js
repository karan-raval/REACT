import { legacy_createStore } from "redux";


let initial = {
    count : 0,
    count1 : 0,
    count3 : 0
}

const reducer = (state = initial,action)=>{
    switch(action.type){
        case "INC" :
            return {
                ...state,
                count : state.count + action.payload
            }
        case "DEC" :
            return {
                ...state,
                count : state.count - action.payload
            }
        case "INCREASE" :
             return {
                ...state,
                count1 : state.count1 + action.payload
             }  
        case "DECREASE" :
        return {
            ...state,
            count1 : state.count1 - action.payload
        }      
        case "INC50" :
             return {
                ...state,
                count3 : state.count3 + action.payload
             }  
        case "DEC50" :
        return {
            ...state,
            count3 : state.count3 - action.payload
        }    
             
        default : return state;    
    }
    
}


export let store =legacy_createStore(reducer)