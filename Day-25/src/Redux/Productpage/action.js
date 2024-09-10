import { ERROR, LOADING, SUCCESS } from "./actiontype"


export const FetchData = (dispatch)=>{
    dispatch({type : LOADING})
    // fetch(`https://mock-server-app-4tp9.onrender.com/product`)
    fetch(`https://mock-server-app2-dll0.onrender.com/newproduct`)
    .then((res)=>res.json())
    .then((res)=>{
        dispatch({type : SUCCESS, payload : res})
    })
    .catch((err)=>{
        dispatch({type : ERROR, payload:err})
    })
}
    