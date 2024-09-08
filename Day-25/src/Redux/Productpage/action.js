import { ERROR, LOADING, SUCCESS } from "./actiontype"


export const FetchData = (dispatch)=>{
    dispatch({type : LOADING})
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR})
    })
}