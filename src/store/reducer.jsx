const initialstate={
   todos: ["breakfast","lunch","dinner"],
   editindex: null,
   editvalue:""
}

  export const reducerfn=(state=initialstate,action)=>{
  
    switch(action.type){
        case "add" : return{
            ...state,
            todos:[...state.todos,action.payload]

        }

        case "remove" :
            {
              let newtodo=[...state.todos]
              newtodo.splice(action.payload,1)
                  return{
                    ...state,
                    todos:newtodo
                  }
            }
            case "edit" :
              {
                
                return{
                  ...state,
    editindex:action.payload.index,
    editvalue:state.todos[action.payload.index],
    
  
    
                }
              }
            
  
    case "setedit":
      
    {
   const newtodo=[...state.todos]
   newtodo[state.editindex]=action.payload
      return {
       todos:newtodo,
       editindex:"",
       editvalue:null

      }
    }
 
       
        

    }
return state
}