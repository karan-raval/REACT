import React, { createContext, useReducer } from 'react'

export const Mycontext = createContext()

let count = {
    count1 : 0,
    count2 : 0
}

const reducer = (state = count,action)=>{
    switch(action.type){
        case "INC" :
            return {
                ...state,
                count1 : state.count1 + 1
            }
        case "DEC" :
            return {
                ...state,
                count1 : state.count1 - 1
            }
        default : return state        
    }
}
const Contaxtapi = ({children}) => {
  

    
    const [state,dispatch] = useReducer(reducer,count)
  return (
    <Mycontext.Provider value={{state,dispatch}}>
        {children}
    </Mycontext.Provider>
    
  )
}

export default Contaxtapi