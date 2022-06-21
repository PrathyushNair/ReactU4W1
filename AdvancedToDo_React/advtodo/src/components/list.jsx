import React from 'react'
import Item from './item'
 const List = ({el,list,setList,completed, arr,setarr, setCompleted,setTick ,tick}) => {
   
  return (
     
    <div>
        <Item setTick={setTick}tick={tick} completed={completed}  setCompleted={setCompleted} el={el} list={list} setList={setList}></Item>
    </div>
  )
}

export default List