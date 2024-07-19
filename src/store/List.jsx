import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function List() {
  const global=  useSelector(val=>val)
 

  const dispatch= useDispatch()
  return (
    <div>

  {
    global.todos.length>0?
global.todos.map((value,index)=>{
    return(
        <li key={index}>{value}
        <button onClick={()=>{
            dispatch({
                type:"remove",
                payload:index
            })
        }}>delete</button>

        <button onClick={()=>{
            dispatch({
                type:"edit",
                payload:{
                    index:index,
                    newtodo: ""
                }
                    
            })
        }}>edit</button>
        </li>
    )
})
    : <p>nothing to show</p>
  }
    </div>
  )
}
