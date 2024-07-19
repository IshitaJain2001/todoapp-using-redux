import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'

export default function Input() {
  const gloabl= useSelector(val=>val)
    const [todo,setTodo] = useState('')
    const [editted,setEditted] = useState('')
    useEffect(()=>{
        setTodo(gloabl.editvalue)
        
            },[gloabl.editindex,gloabl.editvalue])

const dispatch= useDispatch()
    function addtodo(event){
        setTodo(event.target.value)
        setEditted(event.target.value)
    }

  return (
    <div>
        <input type="text" 
        onChange={addtodo}
        value={todo}
        />
        <button onClick={()=>{
            dispatch({
                type:"add",
                payload:todo
            })
            setTodo('')
        }}>add</button>

        <button onClick={()=>{
            dispatch({
                type:"setedit",
                payload:editted
            })

            setTodo('')
        }}>update</button>
    </div>
  )
}
