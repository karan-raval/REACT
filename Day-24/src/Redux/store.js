
import {legacy_createStore} from "redux"

let initial = {
    isLogin : false,
    user : null,
    isError : false,
    isLoading : false
}

const reducer = (state = initial,{type,payload})=>{
      switch(type){
           case "LOADING" : 
            return {
                ...state,
                isLoading : true
            }
            case "SUCCESS" :
              return {
                 ...state,
                 user : payload,
                 isLogin : true,
                 isLoading : false
              }
            case "ERROR" : 
               return {
                  ...state,
                  isLoading : false,
                  isError : true
               }  
            default : return state   
            
      }
}

export function fetchapi(deepak,email){
    deepak({type : "LOADING"})
    fetch(`https://mock-serll0.onrender.com/user?email=${email}`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res)
        deepak({type : "SUCCESS", payload : res})
    })
    .catch((err)=>{
        console.log(err)
        deepak({type : "ERROR"})
    })
}


export const store = legacy_createStore(reducer)