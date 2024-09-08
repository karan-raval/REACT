import { SERROR, SLOADING, SSUCCESS } from "./actiontype.js"

export const FetchData = (dispatch,id)=>{
    dispatch({type : SLOADING})
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SSUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : SERROR})
    })
}